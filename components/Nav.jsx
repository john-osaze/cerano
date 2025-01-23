'use client'

import { Link } from 'react-scroll/modules'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { useEffect, useState } from 'react';

const links = [
    {
        name: "home",
        path: "home"
    },
    {
        name: "vision",
        path: "vision"
    },
    {
        name: "about",
        path: "about"
    },
    {
        name: "events",
        path: "events"
    },
    {
        name: "contact",
        path: "contact"
    },
]

export default function Nav() {
    const [nav, setNav] = useState(false);

    const scrollNav = () => {
        if (window.scrollY >= 20) {
            setNav(true)
        } else{
            setNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollNav)

        return ()=> {
            window.addEventListener("scroll", scrollNav)
        }
    }, [])

    const pathname = usePathname();
    return (
        <nav className={nav ? "py-4 xl:py-4 nav-bar fixed top-0 w-full bg-white z-[100] shadow-2xl transition-all" : "py-4 xl:py-4 nav-bar fixed top-0 w-full bg-[transparent] transition-all"}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="home" className="cursor-pointer">
                    <Image src={nav ? "/img/logo.png" : "/img/logo-white.png"} alt="Cerano Logo" priority quality={100} width={175} height={175} />
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <div className="flex gap-x-16 nav-menu">
                        {links.map((link, index) => {
                            return <Link activeClass="active" smooth={true} spy={true} offset={-50} duration={500} to={link.path} key={index} className={nav ? "text-black uppercase text-xs font-bold hover:text-primary cursor-pointer" : "text-white uppercase text-xs font-bold hover:text-primary cursor-pointer"}>
                                {link.name}
                            </Link>
                        })}
                    </div>
                </div>

                <div className="block lg:hidden">
                    <Sheet>
                        <SheetTrigger className="flex justify-center items-center">
                            <CiMenuFries className={nav ? "text-[32px] text-black" : "text-[32px] text-white"} />
                        </SheetTrigger>

                        <SheetContent className="flex flex-col">
                            <div className="mt-32 mb-10 text-center text-2xl">
                                <Link to="home">
                                    <Image src="/img/logo-white.png" alt="Cerano Logo" priority quality={100} width={175} height={175} />
                                </Link>
                            </div>

                            <div className="mobile-nav flex flex-col justify-center items-start gap-10">
                                {links.map((link, index) => {
                                    return <Link to={link.path} key={index} className={`text-white uppercase text-xl font-semibold cursor-pointer`}>
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