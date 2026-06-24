export default async function Layout(props: LayoutProps<"/math">) {

    return (
        <div className="container-v1">
            {props.children}
        </div>
    )
}