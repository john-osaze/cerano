import Button from "@/components/Button"
import Image from "next/image"

export default function Newsletter() {
    return (
        <section className="container about-us">
            <div className="about-wrapper mt-0 mb-14 py-14">
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="about-content mb-14 lg:mb-0">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <Image src="/img/culture-img.jpg" priority width={600} height={500} alt="subscribe-img" />
                        </div>
                    </div>

                    <div className="sm:max-w-lg">
                        <h1 className="font-playfair text-4xl tracking-tight text-black sm:text-6xl">
                            <span className="font-normal">Subscribe to</span> <br />
                            <span className="text-primary font-bold">
                                our newsletter
                            </span>
                        </h1>
                        <div className="pl-0 lg:pl-10">
                            <p className="my-8 text-lg text-gray-800">
                                Stay updated with our newsletter and be the first to know about the latest updates, and insights straight to your inbox. Join our official list and never miss out!
                            </p>
                            <Button color="text-primary" text="Join now" icon="/svg/right-arrow.svg" destination="/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}