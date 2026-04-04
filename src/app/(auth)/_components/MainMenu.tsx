"use client"
import { usePathname } from "next/navigation";
import MainMenuUser from "./MainMenuUser";
import Link from "next/link";
import { Bot, Copy, LandPlot, Settings, ToolCase, UsersRound } from "lucide-react";
import clsx from "clsx";
import { useContext } from "react";
import ContextUser from "@/context/ContextUser";
import { isAdmin } from "@/types/User";
import Hr from "@/app/_components/Hr";



export type MenuLink = {
    title: string,
    link: string,
    icon?: React.ReactNode
}


export default function MainMenu() {
    const pathname = usePathname();
    const { stateUser } = useContext(ContextUser);


    const links: MenuLink[] = [
        {
            title: "Хаки",
            link: "/dashboard/hacks",
            icon: <Copy />
        },
        {
            title: "Telegram бот",
            link: "/dashboard/telegram",
            icon: <Bot />
        },
        {
            title: "Помощники",
            link: "/dashboard/helpers",
            icon: <ToolCase />
        },
    ];


    const adminLinks: MenuLink[] = [
        {
            title: "Администрирование",
            link: "/admin",
            icon: <Settings />
        },
        {
            title: "Пользователи",
            link: "/admin/users",
            icon: <UsersRound />
        },
        {
            title: "Домены",
            link: "/admin/domains",
            icon: <LandPlot />
        }
    ];


    return (
        <div className="fixed flex flex-col justify-between top-[60px] bottom-0 py-2">
            <div className="flex-1 flex flex-col gap-2">
                {links.map(link => (
                    <Link key={link.link}
                        href={link.link}
                        className={clsx("flex gap-2", {
                            "text-sky-400": pathname.includes(link.link)
                        })}
                    >
                        {link.icon}
                        {link.title}
                    </Link>
                ))}


                {isAdmin(stateUser.user) &&
                    <>
                        <Hr />
                        <nav className="flex flex-col gap-2">
                            {adminLinks.map(link => (
                                <Link key={link.link}
                                    href={link.link}
                                    className={clsx("flex gap-2", {
                                        "text-sky-400": pathname.includes(link.link)
                                    })}
                                >
                                    {link.icon}
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </>
                }
            </div>

            <Link href={"/personal"}>
                <MainMenuUser />
            </Link>
        </div>
    )
}