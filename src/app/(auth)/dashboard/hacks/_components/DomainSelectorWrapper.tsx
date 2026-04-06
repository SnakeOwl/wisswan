"use client"

import DomainsSelector from "@/app/(auth)/_components/DomainsSelector";
import { Skeleton } from "@/app/_components/Skeletons/Skeleton";
import ContextUser from "@/context/ContextUser";
import { Fetch, Get, Post } from "@/libs/Fetch";
import { Domain } from "@/types/Domain";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export default function DomainSelectorWrapper({
    hackId,
    initialUsedDomains = []
}: {
    hackId: number | null
    initialUsedDomains?: Domain[]
}) {
    const needSaveAfterGettingId = useRef<boolean>(hackId === null);
    const { stateUser } = useContext(ContextUser);
    const [usedDomains, setUsedDomains] = useState<Domain[]>(initialUsedDomains);
    const [disableDomainSelector, setDisableDomainSelector] = useState<boolean>(false);
    const [domainsForMatches, setDomainsForMatches] = useState<Domain[] | null>(null);
    const reverseIndexForTempDomains = useRef<number>(-1); // starts from minus



    const syncDomains = useCallback(async (domains: {
        id?: number, // id is not nessesary for new domains
        name: string
    }[]) => {
        let boundedIds: number[] = [];
        let syncResponse: any;

        if (hackId === null) {
            // NO HACK.ID, NEED TO SAVE BUFFER
            domains.forEach((currentElement, index) => {
                if (currentElement.id == undefined) {
                    // temp object, until you can't get Id from backend (no hack.id == no save)
                    const tempDomain: Domain = {
                        id: reverseIndexForTempDomains.current--, // <-- key moment
                        alias: null,
                        created_at: new Date().toString(),
                        name: currentElement.name,
                        published: false,
                        updated_at: new Date().toString()
                    }
                    domains[index] = tempDomain;
                }
            });
            boundedIds = domains.map(el => el.id!);
        } else {
            // ALL OK, CAN BE SAVED ON BACKEND
            setDisableDomainSelector(true);
            domains = domains.map(el => (el.id && el.id > 0) ? el : { ...el, id: undefined })

            syncResponse = await Post(stateUser.authentication_status == "authorized"
                ? `user/hacks/sync-domens/${hackId}`
                : `hacks/anonym-form-suggestion-sync-domains/${hackId}`, {
                domains: domains
            });

            boundedIds = syncResponse.bounded;
        }


        const newUsedDomains: Domain[] = [];
        const oldUsedDomains = usedDomains;

        if (boundedIds != undefined && domainsForMatches != null) {
            boundedIds.forEach((id: number) => {
                let domain: Domain | undefined = oldUsedDomains.find(dom => dom.id == id);
                if (domain != undefined) {
                    newUsedDomains.push(domain);
                } else {
                    // search in old usedDomains
                    domain = domainsForMatches.find(dom => dom.id == id);
                    if (domain != undefined) {
                        newUsedDomains.push(domain);
                    } else {
                        // TEMPORALLY BUFFER SAVING:
                        domain = domains.find(dom => dom.id == id) as Domain | undefined;
                        if (domain != undefined) {
                            newUsedDomains.push(domain);
                        }
                    }

                    // maybe it's a new Domain and it will be in response.new_domains  
                }
            });
        }


        if (syncResponse && Array.isArray(syncResponse.new_domains) && syncResponse.new_domains.length > 0) {
            newUsedDomains.push(...syncResponse.new_domains);
        }


        setUsedDomains(newUsedDomains);
        setDisableDomainSelector(false);
    }, [hackId, stateUser.authentication_status, usedDomains, domainsForMatches])


    useEffect(() => {
        if (domainsForMatches === null && stateUser.authentication_status != "unknown") {
            (async () => {
                let domainsForMathces: Domain[] = [];
                if (stateUser.authentication_status == "authorized") {
                    await Get('user/get-used-domains-in-hacks')
                        .then(usedDomainsResponse => {
                            domainsForMathces.push(...usedDomainsResponse);
                        })
                }

                await Fetch('feed/domains', 20, ['domains'])
                    .then(publicDomains => {
                        const domainsForMathcesCurrentIds = domainsForMathces.map(el => el.id);
                        domainsForMathces.push(...publicDomains.filter((el: Domain) => !domainsForMathcesCurrentIds.includes(el.id)))
                    })

                setDomainsForMatches(domainsForMathces);
            })()
        }
    }, [stateUser.authentication_status, domainsForMatches]);


    useEffect(() => {
        if (hackId !== null && needSaveAfterGettingId.current) {
            needSaveAfterGettingId.current = false;

            // TODO: REFACTOR: setTimeout - Это скорее заглушка чтобы линт пропускал. 
            // но я серьёзно пока не знаю как сделать сохранение доменов при приходе нужного айди для сохранения.
            // если перенести сохранение на уровень выше, то компонент становится менее автомативным
            
            /* eslint-disable */
            syncDomains(usedDomains); // save Domains after creatign Hack
            /* eslint-enable */
        }
    }, [hackId, syncDomains, usedDomains])




    // TODO: REFACTOR: нужно задержать вывод или переделывать функцию под SSR
    if (domainsForMatches === null)
        return (
            <Skeleton className="min-h-12 w-full" />
        )


    return (
        <DomainsSelector
            boundDomain={async (domain: string | Domain) => {
                const domains = [...usedDomains.map((el: Domain) => ({
                    id: el.id,
                    name: el.name
                })), (typeof domain == "string" ? { name: domain } : { id: domain.id, name: domain.name })];
                syncDomains(domains);
            }}
            selectedDomains={usedDomains}
            unboundDomain={(id: number) => {
                const newDomains = [...usedDomains.filter((el: Domain) => el.id != id)];
                syncDomains(newDomains);
            }}

            initialMatches={domainsForMatches}
            disabled={disableDomainSelector}
        />
    )
}