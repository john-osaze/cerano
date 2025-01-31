import Button from "@/components/Button"

export default function Vision() {
    return (
        <section className="container our-vision my-10" id="vision">
            <div className="py-14 my-14 vision-wrapper">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font-playfair text-xl font-bold tracking-tight text-primary sm:text-xl">
                            Our Vision
                        </h1>
                        <div className="">
                            <p className="my-8 text-3xl text-black font-playfair">
                                We envision a world where <b>creativity</b> and <b>culture</b> is the driving force to success.
                            </p>
                        </div>
                    </div>

                    <div className="sm:max-w-lg">
                        <div className="">
                            <p className="my-8 text-lg text-gray-800">
                                Our vision is to promote peace and security in our commnunities through empowerment programmes and seminars with the aim of eradicating youth restiveness and nurture them for global leadership.
                            </p>
                            <Button color="text-primary" text="Learn more" icon="/svg/right-arrow.svg" destination="/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}