"use client"
import StatusView from "@/app/(auth)/_components/StatusView"
import EditorjsHackView from "@/app/_components/Editorjs/EditorjsHackView"
import { Hack } from "@/types/Hack"


export default function HackView({
    hack,
    className = '',
    onClick,
    showStatus = false
}: {
    hack: Hack
    className?: string
    onClick?: () => void
    showStatus?: boolean
}) {
    return (
        <div key={hack.id}
            className={`rounded border dark:bg-black dark:border-neutral-800 border-neutral-200 p-2 ${className}`}
            onClick={onClick}
        >
            <div className="flex items-start justify-between">
                <div className="text-lg mb-2 whitespace-pre-wrap">
                    {hack.title}
                </div>

                {showStatus &&
                    <StatusView status={hack.status} />
                }
            </div>

            {hack.domains && hack.domains.length > 0 &&
                <div className="mb-2 flex flex-wrap gap-3">
                    {hack.domains.map(domain => (
                        <div key={domain.id}
                            className="px-2 py-1 border border-neutral-200 dark:border-neutral-800 rounded"
                        >
                            {domain.name}
                        </div>
                    ))
                    }
                </div>
            }


            <EditorjsHackView
                JSONContext={hack.value || ''}
                hackId={hack.id}
            />
        </div>
    )
}