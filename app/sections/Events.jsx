import Button from "@/components/Button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Events() {
    return (
        <div className="bg-white">
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
                            <p className="mt-4 mb-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh</p>
                            <Button color="text-primary" text="More info" icon="/svg/right-arrow.svg" destination="/" />
                        </div>
                    </div>
                    <Separator />
                    <div className="event-card flex flex-wrap lg:flex-nowrap items-start justify-center gap-x-6 gap-y-4 px-2 lg:gap-x-14 py-6 lg:px-14">
                        <div className="event-img w-full lg:w-1/2">
                            <Image src="/img/event-img-2.jpg" priority width={600} height={500} alt="subscribe-img" />
                        </div>
                        <div className="event-info text-black w-full lg:w-1/2">
                            <h2 className="font-playfair font-semibold text-lg mb-2">Army Day Grammar School Reachout</h2>
                            <span className="text-sm italic">February 10, 2019 - April 28, 2019</span>
                            <p className="mt-4 mb-12">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
                            <Button color="text-primary" text="More info" icon="/svg/right-arrow.svg" destination="/" />
                        </div>
                    </div>
                    <Separator />
                    <div className="event-card flex flex-wrap lg:flex-nowrap items-start justify-center gap-x-6 gap-y-4 px-2 lg:gap-x-14 py-6 lg:px-14">
                        <div className="event-img w-full lg:w-1/2">
                            <Image src="/img/event-img-3.jpg" priority width={600} height={500} alt="subscribe-img" />
                        </div>
                        <div className="event-info text-black w-full lg:w-1/2">
                            <h2 className="font-playfair font-semibold text-lg mb-2">Exclusive Interview with ITV</h2>
                            <span className="text-sm italic">February 10, 2019 - April 28, 2019</span>
                            <p className="mt-4 mb-12">Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.</p>
                            <Button color="text-primary" text="More info" icon="/svg/right-arrow.svg" destination="/" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}