import Button from "@/components/Button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Events() {
    return (
        <section className="bg-white" id="events">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl/8 font-bold tracking-tight text-black font-playfair text-primary text-center mb-6">Our Events</h2>
                <p className="text-center text-pretty text-black mb-16">
                    Explore our events and discover how we have positively imparted society as <br /> well as inspire the youth with our initiative.
                </p>

                <div className="mt-6 px-2 lg:px-20">

                    <div className="event-card flex flex-wrap lg:flex-nowrap items-start justify-center gap-x-6 gap-y-4 px-2 lg:gap-x-14 py-6 lg:px-14">
                        <div className="event-img w-full lg:w-1/2">
                            <Image src="/img/event-img-1.jpg" priority width={600} height={500} alt="subscribe-img" />
                        </div>
                        <div className="event-info text-black w-full lg:w-1/2">
                            <h2 className="font-playfair font-semibold text-lg mb-2">Emotan Secondary School Reachout</h2>
                            <span className="text-sm italic">February 10, 2019 - April 28, 2019</span>
                            <p className="mt-4 mb-12">
                                We reached out to Emotan Secondary School, provided academic support, mentorship, and resources. Through workshops and interactive sessions, we fostered a collaborative environment, inspiring students to excel academically and develop cultural love.</p>
                            <Button color="text-primary" text="More info" icon="/svg/right-arrow.svg" destination="https://www.instagram.com/cerano_global" />
                        </div>
                    </div>
                    <Separator />
                    <div className="event-card flex flex-wrap lg:flex-nowrap items-start justify-center gap-x-6 gap-y-4 px-2 lg:gap-x-14 py-6 lg:px-14">
                        <div className="event-img w-full lg:w-1/2">
                            <Image src="/img/event-img-2.jpg" priority width={600} height={500} alt="subscribe-img" />
                        </div>
                        <div className="event-info text-black w-full lg:w-1/2">
                            <h2 className="font-playfair font-semibold text-lg mb-2">Exclusive Interview with ITV</h2>
                            <span className="text-sm italic">February 10, 2019 - April 28, 2019</span>
                            <p className="mt-4 mb-12">
                                Our founder was specially invited for an exclusive interview with ITV where he shared valuable insights, achievements, and future plans with a broad audience. He also contributed to meaningful discussions as well as highlighted key solutions to some problems in the state.</p>
                                <Button color="text-primary" text="More info" icon="/svg/right-arrow.svg" destination="https://www.instagram.com/cerano_global" />
                        </div>
                    </div>
                    <Separator />
                    <div className="event-card flex flex-wrap lg:flex-nowrap items-start justify-center gap-x-6 gap-y-4 px-2 lg:gap-x-14 py-6 lg:px-14">
                        <div className="event-img w-full lg:w-1/2">
                            <Image src="/img/event-img-3.jpg" priority width={600} height={500} alt="subscribe-img" />
                        </div>
                        <div className="event-info text-black w-full lg:w-1/2">
                            <h2 className="font-playfair font-semibold text-lg mb-2">Army Day Grammar School Reachout</h2>
                            <span className="text-sm italic">February 10, 2019 - April 28, 2019</span>
                            <p className="mt-4 mb-12">
                                In this reachout, we hosted a cultural campaign that was aimed celebrating the rich cultural heritage of Edo. This initiative enlightened students on the importance of traditional values and through culture-themed showcases, we inspired students to embrace their roots.</p>
                                <Button color="text-primary" text="More info" icon="/svg/right-arrow.svg" destination="/https://www.instagram.com/cerano_global" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}