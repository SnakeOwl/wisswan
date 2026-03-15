"use client"

import { useState } from "react"
import Button from "./_components/buttons/Button";

export default function ComponentForTest() {
    const [trigger, setTrigger] = useState<boolean>(true);


    return (
        <div>
            <Button onClick={() => setTrigger(!trigger)}>
                {trigger ? ("true") : ("false")}
            </Button>
        </div>
    )
}