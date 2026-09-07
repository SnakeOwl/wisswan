import DomainsSelector from "@/app/(auth)/_components/DomainsSelector"
import { Fetch } from "@/libs";
import { Domain } from "@/types/Domain";
import { useEffect, useState } from "react"

export default function DomainsSelectorWrapper({
    selectedDomains = [],
    syncDomains,
    disabled
}: {
    selectedDomains?: Domain[]
    syncDomains: (newSelectedDomains: (string | Domain)[]) => void
    disabled: boolean
}) {

    const [initialDomains, setInitialDomains] = useState<Domain[]>([]);


    useEffect(() => {
        Fetch("feed/domains", false, ["domains"])
            .then(response => {
                if (Array.isArray(response) && response.length > 0) {
                    setInitialDomains(response);
                }
            })
    }, []);


    const unboundDomain = (id: number) => {
        syncDomains(selectedDomains.filter(el => el.id != id))
    }



    const boundDomain = (newNameOrId: string | Domain) => {
        syncDomains([...selectedDomains, newNameOrId]);
    }


    return (
        <DomainsSelector
            selectedDomains={selectedDomains}
            boundDomain={boundDomain}
            unboundDomain={unboundDomain}
            initialMatches={initialDomains}
        />
    )
}