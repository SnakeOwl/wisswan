import { RefObject } from "react"

export interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    ref?: RefObject<HTMLTextAreaElement | null>
}

export default function Textarea({ className, ...other }: ITextarea) {
    const name = other.name ? other.name : other.id ? other.id : undefined;

    return (
        <textarea
            name={name}
            className={`
                border border-neutral-300 focus:border-b-neutral-800
                duration-300 focus:outline-hidden
                ${className}`}
            {...other}
        />
    )
}