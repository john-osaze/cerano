import Button from "@/components/Button"
import Image from "next/image"
import DashIcon from "../../public/img/dash.png"

export default function About() {
    return (
        <section className="container about-us">
            <div className="about-wrapper py-0 mt-0 mb-12 md:my-14 md:py-14">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="about-content">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <Image src="/img/about-us.jpg" priority width={600} height={500} alt="about-img" />
                        </div>
                    </div>

                    <div className="pt-8 md:pt-0 sm:max-w-lg">
                        <h1 className="font-playfair text-4xl tracking-tight text-black sm:text-6xl">
                            <span className="text-primary font-bold">
                                About Us
                            </span>
                        </h1>
                        <div className="pl-0 md:pl-10">
                            <p className="my-8 text-lg text-gray-800">
                                Don't miss out on this exclusive opportunity to earn from simply completing tasks on your phone. You
                                can share with your friends as well.
                            </p>

                            <ul className="core-values text-black text-base mb-10">
                                <h3 className="text-xl font-bold mb-3">Our Core Values</h3>

                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Peace and Harmony</span>
                                </li>
                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Belief in a greater Nigeria</span>
                                </li>
                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Creativity and Culture</span>
                                </li>
                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Loyalty</span>
                                </li>
                            </ul>

                            <Button color="text-primary" text="Learn more" icon="/svg/right-arrow.svg" destination="/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
