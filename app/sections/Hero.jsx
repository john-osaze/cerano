import Button from '@/components/Button'

export default function Hero() {
    const today = new Date();
    const oneWeekLater = new Date(today);
    oneWeekLater.setDate(today.getDate() + 7);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <section className="hero bg-[url('/img/hero-bg.jpg')] bg-center bg-cover bg-no-repeat h-[95vh] md:h-[90vh] w-full py-56 px-4">
            <div className="container mx-auto text-white">
                <span className="font-playfair">{today.toLocaleDateString(undefined, options)} &mdash; {oneWeekLater.toLocaleDateString(undefined, options)}</span>
                <h1 className="font-bold text-6xl md:text-7xl  mt-4 mb-6">
                    Connect to your <br />
                    culture and roots.
                </h1>
                <Button text="Learn more" icon="/svg/arrow.svg" destination="https://www.linkedin.com/in/cerano-global-117197346" />
            </div>
        </section>
    )
}