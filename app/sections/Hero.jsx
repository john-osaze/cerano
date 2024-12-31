import Button from '@/components/Button'

export default function Hero() {
    return (
        <section className="hero bg-[url('/img/hero-bg.jpg')] bg-center bg-cover bg-no-repeat h-screen md:h-[90vh] w-full py-56 px-4">
            <div className="container mx-auto text-white">
                <span className="font-playfair">February 10, 2024 &mdash; April 18, 2024</span>
                <h1 className="font-bold text-6xl md:text-7xl  mt-4 mb-6">
                    Connect to your <br/> 
                    culture and roots.
                </h1>
                <Button text="Learn more" icon="/svg/arrow.svg" destination="/"/>
            </div>
        </section>
    )
}