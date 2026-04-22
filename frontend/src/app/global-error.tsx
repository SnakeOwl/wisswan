"use client"
import Button from "./_components/buttons/Button"

// Error boundaries must be Client Components

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        // global-error must include html and body tags
        <html>
            <head>
                <meta name="robots" content="noindex,nofollow" />
            </head>
            <body>
                <div className="className='p-[4px] w-full lg:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid gap-[20px]'">
                    <h1>Что-то сломалось.</h1>
                    <div className='grid lg:grid-cols-3 gap-[16px]'>
                        <Button
                            onClick={() => reset()}
                        >
                            Попробовать снова
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    )
}