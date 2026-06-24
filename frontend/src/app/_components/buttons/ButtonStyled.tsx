import clsx from "clsx";


export interface IButtonStyled extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "default" | "red" | "red-reversed" | "emerald-reversed" | "blue"
}


export default function ButtonStyled({
    className = '',
    theme = "default",
    ...other
}: IButtonStyled) {
    return (
        <button
            className={clsx(`border focus:outline-hidden not-disabled:cursor-pointer duration-300
                ${className}`, {
                "text-white hover:text-red-500 bg-red-500 border-red-700 hover:bg-white": theme == "red",
                "hover:text-white text-red-500 hover:bg-red-500  border-red-700 bg-white": theme == "red-reversed",
                "hover:text-white text-emerald-500 hover:bg-emerald-400 border-emerald-400 bg-white": theme == "emerald-reversed",
                "hover:text-white text-blue-500 hover:bg-blue-400 border-blue-400 bg-white": theme == "blue",
            })}

            {...other}
        >
        </button>
    )
}