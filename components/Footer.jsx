import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { Separator } from "@/components/ui/separator"
import { FaFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <section className="footer bg-gray-800 text-white relative h-[83vh]">
            <footer className="flex flex-col items-center px-8 py-10 md:px-10 md:pt-14 lg:px-36 lg:pt-16 page-footer gap-y-24 md:pb-8">
                <div className="footer-top text-center">
                    <p className="font-playfair text-xl">Love what we do?</p>
                    <h1 className="text-4xl md:text-6xl/8 mt-2 md:mt-8 font-bold">Join us now!</h1>
                </div>

                <div className="footer-mid w-full flex flex-col md:flex-row justify-between items-center">
                    <div className="footer-logo">
                        <Link href="/">
                            <Image src="/img/logo-white.png" alt="Cerano Logo" priority quality={100} width={200} height={175} />
                        </Link>
                    </div>

                    <div className="footer-btn hidden lg:block">
                        <button className="border border-slate-500 rounded-full px-10 py-5 ml-14 text-gray-300">Learn more</button>
                    </div>

                    <div className="footer-extras flex items-center gap-x-6 mt-8 md:mt-0">
                        <div className="timer-icon">
                            <CiTimer size={55} />
                        </div>
                        <div className="extras">
                            <p className="phone-number font-semibold text-lg">
                                +234 812 3456 789
                            </p>
                            <Separator className="my-2 opacity-50" />
                            <span className="text-gray-400">57, Mission Road, Benin.</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom w-full">
                    <Separator className="opacity-50 mb-8" />

                    <div className="socials flex items-center justify-center gap-x-8">
                        <Link href={"/"}>
                            <FaFacebook size={22} />
                        </Link>
                        <Link href={"/"}>
                            <FaLinkedin size={22} />
                        </Link>
                        <Link href={"/"}>
                            <FaSquareInstagram size={22} />
                        </Link>
                        <Link href={"/"}>
                            <HiMail size={25} />
                        </Link>
                    </div>
                </div>
            </footer>

            <div className="footer-img hero bg-[url('/img/footer-bg.png')] bg-top bg-cover bg-no-repeat w-full py-36 px-20 absolute bottom-[0px] opacity-5 grayscale brightness-150">
            </div>
        </section>
    )
}

export default Footer