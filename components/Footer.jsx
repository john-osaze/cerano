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
                        <Link href="https://www.facebook.com/profile.php?id=61571856807113">
                            <Image src="/img/logo-white.png" alt="Cerano Logo" priority quality={100} width={200} height={175} />
                        </Link>
                    </div>

                    <div className="footer-btn hidden lg:block">
                        <Link href="">
                            <button className="border border-slate-500 rounded-full px-10 py-5 ml-14 text-gray-300">Learn more</button>
                        </Link>
                    </div>

                    <div className="footer-extras flex items-center gap-x-6 mt-8 md:mt-0">
                        <div className="timer-icon">
                            <CiTimer size={55} />
                        </div>
                        <div className="extras">
                            <Link href="tel:+2348101002592">
                                <p className="phone-number font-semibold text-lg">
                                    +234 812 3456 789
                                </p>
                            </Link>
                            <Separator className="my-2 opacity-50" />
                            <Link href="https://maps.app.goo.gl/3QVXPZgU4Nn2zFpD6">
                                <span className="text-gray-400 hover:text-white">57, Mission Road, Benin.</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom w-full">
                    <Separator className="opacity-50 mb-8" />

                    <div className="socials flex items-center justify-center gap-x-8 relative z-[1]">
                        <Link href="https://www.facebook.com/profile.php?id=61571856807113">
                            <FaFacebook size={22} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/cerano-global-117197346">
                            <FaLinkedin size={22} />
                        </Link>
                        <Link href="https://www.instagram.com/cerano_global">
                            <FaSquareInstagram size={22} />
                        </Link>
                        <Link href="mailto:cerano.global@gmail.com">
                            <HiMail size={25} />
                        </Link>
                    </div>
                </div>
            </footer>

            <div className="footer-img hero bg-[url('/img/footer-bg.png')] bg-top bg-cover bg-no-repeat w-full py-36 px-20 absolute bottom-[0px] opacity-5 grayscale brightness-150 z-[0]">
            </div>
        </section>
    )
}

export default Footer