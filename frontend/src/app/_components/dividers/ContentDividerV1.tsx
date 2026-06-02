export default function ContentDividerV1({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={`flex flex-row gap-4 w-full items-center ${className}`} >
            <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
            {children}
            <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
        </div>
    )
}
