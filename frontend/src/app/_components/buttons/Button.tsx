export default function Button({
    className,
    ...other
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`duration-300
                border border-neutral-300 hover:border-neutral-800
                not-disabled:cursor-pointer disabled:text-neutral-500
                focus:outline-hidden 
                ${className}
                `}

            {...other}
            >
        </button>
    )
}