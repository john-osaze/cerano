import Button from "@/components/Button"
import { LuMail, LuMapPin } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from "next/link";


export default function Contact() {
    return (
        <section className="hero bg-[url('/img/contact-bg.jpg')] bg-center bg-cover bg-no-repeat h-[75vh] lg:h-[90vh] w-full pt-16 pb-10 px-8 md:py-20 md:px-12 lg:py-36 lg:px-20" id="contact">
            <div className="container text-black bg-white/90 w-full md:w-4/5 lg:w-3/5 p-8 lg:p-20 backdrop-blur-xl backdrop-opacity-10 backdrop-invert">
                <h1 className="font-playfair text-primary font-bold text-3xl mb-2">
                    Get in touch
                </h1>

                <p className="text-lg mb-8">Reach out to us to get more info about what we do</p>

                <ul className="contact-info flex flex-col gap-y-5 mb-8">
                    <li className="flex items-center">
                        <LuMapPin className="text-[27px]" />
                        <Link href="https://maps.app.goo.gl/3QVXPZgU4Nn2zFpD6" className="ml-2 hover:text-primary">
                            <span>57, Mission Rd, Benin City</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <LuMail className="text-[27px]" />
                        <Link href="mailto:cerano.global@gmail.com" className="ml-2 hover:text-primary">
                            <span>cerano.global@gmail.com</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <MdOutlineLocalPhone className="text-[27px]" />
                        <Link href="tel:+2348101002592" className="ml-2 hover:text-primary">
                            <span>+234 810 100 2592</span>
                        </Link>
                    </li>
                </ul>

                <Button text="Contact us" icon="/svg/right-arrow.svg" destination="/" color="text-primary"/>
            </div>
        </section>
    )
}