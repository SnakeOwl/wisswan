"use client";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function DoubleTextWithLargeImageBox() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Ваш бизнес заслуживает большего <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Проектируем империи
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/extranet/deva-darshan-Jt9syHEhrPE-unsplash.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
