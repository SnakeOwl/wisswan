"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default function ToastTestButton() {
    function showToast() {
        toast.promise(
            new Promise<{ name: string }>((resolve) => {
                window.setTimeout(() => resolve({ name: "Event" }), 2000)
            }),
            {
                loading: "Creating event…",
                success: (data) => `${data.name} created.`,
                error: "Could not create event.",
            }
        )
    }


    return (
        <>
            <Button
                onClick={() => {
                    const toastId = toast.add({
                        title: "It's title",
                        type: "success", // info , warning , error
                        description: "Event has been created.",
                        actionProps: {
                            children: "Undo",
                            onClick() {
                                toast.close(toastId)
                            },
                        },
                    })
                }}
            >
                test
            </Button >

            <Button onClick={showToast}>toast с загрузкой</Button>
        </>
    )
}