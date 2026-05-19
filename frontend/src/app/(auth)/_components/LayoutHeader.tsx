import LayoutBreadcrumbs from "./LayoutBreadcrumbs";


export default async function LayoutHeader() {
    return (
        <div className='flex flex-row gap-4 w-full items-center my-4'>
            <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
            <LayoutBreadcrumbs />
            <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
        </div>
    )
}