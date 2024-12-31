'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "vision",
        path: "/vision"
    },
    {
        name: "team",
        path: "/team"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="py-4 xl:py-4 nav-bar fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image src="/img/logo-white.png" alt="Cerano Logo" priority quality={100} width={175} height={175} />
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <div className="flex gap-x-16 nav-menu">
                        {links.map((link, index) => {
                            return <Link href={link.path} key={index} className={`text-white uppercase text-xs font-bold`}>
                                {link.name}
                            </Link>
                        })}
                    </div>
                </div>

                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger className="flex justify-center items-center">
                            <CiMenuFries className="text-[32px] text-white" />
                        </SheetTrigger>

                        <SheetContent className="flex flex-col">
                            <div className="mt-16 mb-10 text-center text-2xl">
                                <Link href="/">
                                    <Image src="/img/logo-white.png" alt="Cerano Logo" priority quality={100} width={175} height={175} />
                                </Link>
                            </div>

                            <div className="mobile-nav flex flex-col justify-center items-start gap-10">
                                {links.map((link, index) => {
                                    return <Link href={link.path} key={index} className={`text-white uppercase text-xl font-semibold`}>
                                        {link.name}
                                    </Link>
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}