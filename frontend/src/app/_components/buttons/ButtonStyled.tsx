import clsx from "clsx";

export type ButtonStyledTheme = "default" | 
        "red" | "red-reversed" | 
        "emerald-reversed" | 
        "blue" | "blue-reversed" |
        'green' | "green-reversed" |
        'fuchsia' | "fuchsia-reversed" 


export interface IButtonStyled extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonStyledTheme
}


export default function ButtonStyled({
    className = '',
    theme = "default",
    ...other
}: IButtonStyled) {
    return (
        <button 
            {...other}

            className={clsx(`border focus:outline-hidden cursor-pointer disabled:cursor-not-allowed duration-300 ${className}`, {
                "text-white hover:text-red-500 bg-red-500 border-red-700 hover:bg-white": theme == "red",
                "hover:text-white text-red-500 hover:bg-red-500  border-red-700 bg-white": theme == "red-reversed",
                "hover:text-white text-emerald-500 hover:bg-emerald-400 border-emerald-400 bg-white": theme == "emerald-reversed",
                "text-white hover:text-green-500 bg-green-500 border-green-700 hover:bg-white": theme == "green",
                "hover:text-white text-green-600 hover:bg-green-500 border-green-500 bg-white": theme == "green-reversed",
                "text-white hover:text-blue-500 bg-blue-500 border-blue-700 hover:bg-white": theme == "blue",
                "hover:text-white text-blue-500 hover:bg-blue-400 border-blue-400 bg-white": theme == "blue-reversed",
                "text-white hover:text-fuchsia-600 bg-fuchsia-600 border-fuchsia-800 hover:bg-white": theme == "fuchsia",
                "hover:text-white text-fuchsia-600 hover:bg-fuchsia-600 border-fuchsia-500 bg-white": theme == "fuchsia-reversed",
            })}

        >
        </button>
    )
}