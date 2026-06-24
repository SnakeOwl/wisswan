"use client"

import Button from "@/app/_components/buttons/Button"
import Input from "@/app/_components/inputs/Input"
import { Domain } from "@/types/Domain"
import { Check, X } from "lucide-react"
import { useMemo, useRef, useState } from "react"


export default function DomainsSelector({
    selectedDomains,
    unboundDomain,
    boundDomain,
    initialMatches,
    disabled = false
}: {
    selectedDomains: Domain[],
    unboundDomain: (id: number) => void,
    boundDomain: (newNameOrId: string | Domain) => void
    initialMatches: Domain[]
    disabled?: boolean
}) {
    // ==== затереть уже выбранные домены из пула доменов
    let matchesFiltered = [...initialMatches];
    const selectedDomainsIds = selectedDomains.map(el => el.id);
    matchesFiltered = matchesFiltered.filter(el => !selectedDomainsIds.includes(el.id));
    // ---- затереть уже выбранные домены из пула доменов

    const [inputText, setInputText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const matches = useMemo(() => {
        if (inputText.length > 0) {
            const matchedDomains = matchesFiltered.filter(domain => domain.name.toLowerCase().includes(inputText));
            return matchedDomains;
        } else {
            return matchesFiltered;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputText, selectedDomains])


    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value || '';
        setInputText(val);
    }


    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            boundDomain(inputText);
            setInputText('');
        }
    };


    const showCheckButton = inputText.length > 0;


    return (
        <div>
            <h3>Область использования</h3>

            <div id="DomainSelector_domains_container"
                className="flex flex-wrap items-center gap-2 border border-neutral-200 cursor-pointer relative px-1"
                onClick={() => inputRef.current?.focus()}
            >
                {selectedDomains.map((domain: Domain) => (
                    <Button key={domain.id}
                        className="flex gap-1 text-sm items-center pl-2 py-1 rounded-lg group hover:!border-red-600 hover:text-red-600"
                        onClick={() => unboundDomain(domain.id)}
                        disabled={disabled}
                        type="button"
                    >
                        <span>{domain.name}</span>
                        <X className=" h-4 group-hover:text-red-600 " />
                    </Button>
                ))
                }


                <div className="flex gap-2 items-center px-1">
                    <Input id="DomainSelector_domains_pure_input"
                        type="text"
                        value={inputText}
                        onChange={onChangeInputText}
                        onKeyDown={handleInputKeyDown}
                        className="p-2 border-x-0 border-t-0 border-b "
                        ref={inputRef}
                        disabled={disabled}
                    />

                    {showCheckButton &&
                        <Check id="DomainSelector_domains_pure_input_button"
                            className="cursor-pointer hover:text-emerald-500"
                            onClick={() => {
                                boundDomain(inputText);
                                setInputText('');
                            }}
                        />
                    }
                </div>
            </div>


            {matches.length > 0 &&
                <div className="min-h-[100px]">
                    <h4>Используемые области:</h4>

                    <div id="DomainSelector_domains_matches_container"
                        className="flex flex-wrap gap-2"
                    >
                        {matches.map((match: Domain, index) => (
                            <Button key={match.id}
                                className="px-2 py-1 text-sm rounded-lg hover:!border-emerald-600 hover:text-emerald-600"
                                onClick={() => boundDomain(match)}
                                disabled={disabled}
                                type="button"
                            >
                                {match.name}
                            </Button>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}