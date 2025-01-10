import Button from "@/components/Button"
import Image from "next/image"
import DashIcon from "../../public/img/dash.png"

export default function About() {
    return (
        <section className="container about-us">
            <div className="about-wrapper py-0 mt-0 mb-12 lg:my-14 lg:py-14">
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="about-content">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <Image src="/img/about-us.jpg" priority width={600} height={500} alt="about-img" />
                        </div>
                    </div>

                    <div className="pt-8 lg:pt-0 sm:max-w-lg">
                        <h1 className="font-playfair text-4xl tracking-tight text-black sm:text-6xl">
                            <span className="text-primary font-bold">
                                About Us
                            </span>
                        </h1>
                        <div className="pl-0 lg:pl-10">
                            <p className="my-8 text-lg text-gray-800">
                                Citizens of Edo Raise Awareness National Orientation (CERANO) is a non-governmental organization situated in Benin City, Edo State, Nigeria duly registered 2008 by the Corporate Affairs Commission of Nigeria, with registration No: BN2055170.
                            </p>

                            <ul className="core-values text-black text-base mb-10">
                                <h3 className="text-xl font-bold mb-3">Our Aims and Objectives</h3>

                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Promoting peace through art initiatives</span>
                                </li>
                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Rehabilitating and enagaging the down-trodden in society</span>
                                </li>
                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Empowering youths through sports and cultural arts</span>
                                </li>
                                <li className="flex items-center gap-x-2 mb-4">
                                    <Image src={DashIcon} alt="dash-icon" width={20} height={20} />
                                    <span>Environmental development and public sensitization</span>
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
