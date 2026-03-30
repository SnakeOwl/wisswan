export default function Hr(params: React.HTMLAttributes<HTMLHRElement>) {
    return (
        <hr
            className='dark:border-neutral-800 border-neutral-200'
            {...params}
        />
    )
}