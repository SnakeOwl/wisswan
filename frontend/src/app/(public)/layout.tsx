export default async function Layout(props: LayoutProps<"/">) {
    return (
        <div className="pb-4">
            {props.children}
        </div>
    )
}