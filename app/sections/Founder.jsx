import Button from "@/components/Button"
import Image from "next/image"

export default function Founder() {
    return (
        <section className="container" id="founder">
            <div className="about-wrapper py-0 mt-0 mb-12 md:my-14 lg:py-14">
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="pt-8 lg:pt-0 sm:max-w-lg">
                        <h1 className="font-playfair text-4xl tracking-tight text-black sm:text-6xl">
                            <span className="text-primary font-bold">
                                Meet the Founder
                            </span>
                        </h1>
                        <div className="pl-0 md:pl-10">
                            <p className="my-8 text-lg text-gray-800">
                                Charles Obakpolor, a native of Ugbihokho community in Egor L.G.A., Edo State, has a distinguished career in service and leadership. He served as Coordinator of Edo State Produce from 2014 to 2019, contributing to the state's agricultural and economic development. Obakpolor's roles as Secretary of Eguea Iyoba Community and Secretary to the Traditional Custodians reflect his deep connection to his roots and respect for tradition.
                            </p>

                            <p className="my-8 text-lg text-gray-800">
                                As CEO of Cerano Global, Obakpolor demonstrates entrepreneurial acumen and a forward-thinking approach, contributing to economic growth and creating opportunities. He is married with children and a role model for those seeking to blend tradition with innovation and service with leadership.
                            </p>

                            <Button color="text-primary" text="Learn more" icon="/svg/right-arrow.svg" destination="https://www.linkedin.com/in/cerano-global-117197346" />
                        </div>
                    </div>

                    <div className="about-content mt-10 lg:mt-0">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <Image src="/img/cerano-founder.jpg" priority width={600} height={500} alt="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
