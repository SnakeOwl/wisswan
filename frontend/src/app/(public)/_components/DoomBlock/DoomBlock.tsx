"use client"

import Image from "next/image";
import { useState } from "react";
import emulatorLoaderPicture from './emulators-ui-loader.png';
import DoomBlockPlayer from "./DoomBlockPlayer";
import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";

export default function DoomBlock() {
    const [showPlayer, setShowPlayer] = useState<boolean>(false);


    return (
        <div>
            <ContentDividerV1 className="mb-2">
                <h3 className="text-nowrap">Играй в DOOM!</h3>
            </ContentDividerV1>

            {showPlayer ? (
                <DoomBlockPlayer />
            ) : (
                <DoomBlockPoster togglePlayer={() => setShowPlayer(true)} />
            )
            }
        </div>
    )
}


const DoomBlockPoster = ({
    togglePlayer
}: {
    togglePlayer: () => void
}) => {
    return (
        <div onClick={togglePlayer}
            className="mx-auto flex flex-col items-center gap-2"
        >
            <Image
                src={emulatorLoaderPicture}
                width={800}
                height={600}
                alt="Нарисованный кот"
                unoptimized
            />

            <span>Кликни для начала загрузки</span>
        </div>
    )
}