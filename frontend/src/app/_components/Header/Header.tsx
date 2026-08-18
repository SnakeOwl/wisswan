"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import React, { useState } from "react";
import UserButton from "./UserButton";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Header = React.memo(() => {
    const pathname = usePathname();
    // Храним "предыдущий" путь прямо в стейте для сравнения
    const [prevPathname, setPrevPathname] = useState(pathname);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
    }

    const navItems = [
        {
            name: "Заказ",
            link: "/order",
        },
        {
            name: "Математика",
            link: "/math",
        },
        {
            name: "О проекте",
            link: "/about",
        },
        {
            name: "Связь",
            link: "/help",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
console.log(pathname)
if (pathname.startsWith("/cases/")){
    // внутри примеров скрыть
    return null;
}

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    <NavbarButton as={"button"} variant="secondary" >
                        <UserButton />
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <Link
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600"
                        >
                            <span className="block">{item.name}</span>
                        </Link>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                            as={"button"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-fit"
                        >
                            <UserButton />
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
})


Header.displayName = "Header";

export default Header;