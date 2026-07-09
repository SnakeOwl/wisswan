"use client";

import React, { useContext, useState } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Bot, House, LandPlot, Mail, Settings, ToolCase, UsersRound } from "lucide-react";
import ContextUser from "@/context/ContextUser";
import Link from "next/link";
import { isAdmin } from "@/types/User";
import Hr from "@/app/_components/Hr";


export function LayoutUI({
    children
}: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false);

    const { stateUser } = useContext(ContextUser);

    if (stateUser.authentication_status != "authorized")
        return null;


    const userEmail = stateUser.user!.email;


    const links = [
        {
            label: "Telegram бот",
            href: "/dashboard/telegram",
            icon: <Bot className="h-5 w-5 shrink-0 text-neutral-700" />
        },
        {
            label: "Помощники",
            href: "/dashboard/helpers",
            icon: <ToolCase className="h-5 w-5 shrink-0 text-neutral-700" />
        }
    ];

    const adminLinks = [
        {
            label: "Администрирование",
            href: "/admin",
            icon: <Settings className="h-5 w-5 shrink-0 text-neutral-700" />
        },
        {
            label: "Пользователи",
            href: "/admin/users",
            icon: <UsersRound className="h-5 w-5 shrink-0 text-neutral-700" />
        },
        {
            label: "Домены",
            href: "/admin/domains",
            icon: <LandPlot className="h-5 w-5 shrink-0 text-neutral-700" />
        },
        {
            label: "Формы обратной связи",
            href: "/admin/feedbacks",
            icon: <Mail className="h-5 w-5 shrink-0 text-neutral-700" />
        }
    ];

    const userLink = {
        href: '/personal',
        icon: <House className="h-5 w-5 shrink-0 text-neutral-700" />,
        label: userEmail.slice(0, 2) + "..." + userEmail.slice(userEmail.indexOf('@'))
    }


    return (
        <div
            className={cn(
                "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row",
                "h-[60vh]", // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={`simple-link-${idx}`} link={link} />
                            ))}

                            {isAdmin(stateUser.user) &&
                                <>
                                    <Hr />
                                    <nav className="flex flex-col gap-2">
                                        {adminLinks.map((link, index) => (
                                            <SidebarLink key={index} link={link} />
                                        ))}
                                    </nav>
                                </>
                            }
                        </div>
                    </div>
                    <div>
                        <SidebarLink key={'user_link'} link={userLink} />
                    </div>
                </SidebarBody>
            </Sidebar>

            <div className="flex flex-1">
                <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10">
                    {children}
                </div>
            </div>
        </div >
    );
}
const Logo = () => {
    return (
        <Link
            href="/dashboard"
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
        >
            <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium whitespace-pre text-black"
            >
                {process.env.NEXT_PUBLIC_APP_NAME}
            </motion.span>
        </Link>
    );
};
const LogoIcon = () => {
    return (
        <Link
            href="/dashboard"
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
        >
            <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black" />
        </Link>
    );
};



