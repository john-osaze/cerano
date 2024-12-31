import Button from "@/components/Button"
import { LuMail, LuMapPin } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from "next/link";


export default function Contact() {
    return (
        <section className="hero bg-[url('/img/contact-bg.jpg')] bg-center bg-cover bg-no-repeat h-[75vh] md:h-[90vh] w-full pt-16 pb-10 px-8 md:py-36 md:px-20">
            <div className="container text-black bg-white/90 w-full md:w-3/5 p-8 md:p-20 backdrop-blur-xl backdrop-opacity-10 backdrop-invert">
                <h1 className="font-playfair text-primary font-bold text-3xl mb-2">
                    Get in touch
                </h1>

                <p className="text-lg mb-8">Reach out to us to get more info about what we do</p>

                <ul className="contact-info flex flex-col gap-y-5 mb-8">
                    <li className="flex items-center">
                        <LuMapPin size={27} />
                        <Link href="/" className="ml-2">
                            <span>57, Mission Road, Benin City, Edo State.</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <LuMail size={27} />
                        <Link href="/" className="ml-2">
                            <span>ceranoenterprise@gmail.com</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <MdOutlineLocalPhone size={27} />
                        <Link href="/" className="ml-2">
                            <span>0812 345 6789</span>
                        </Link>
                    </li>
                </ul>

                <Button text="Contact us" icon="/svg/right-arrow.svg" destination="/" color="text-primary"/>
            </div>
        </section>
    )
}