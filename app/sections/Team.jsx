const teamMembers = [
    {
        id: 1,
        name: 'John Doe',
        href: '#',
        imageSrc: '/img/team-1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        title: 'CEO & Founder',
    },

    {
        id: 2,
        name: 'Jane Tee',
        href: '#',
        imageSrc: '/img/team-2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        title: 'Managing Director',
    },

    {
        id: 3,
        name: 'Amy June',
        href: '#',
        imageSrc: '/img/team-3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        title: 'Permanent Secretary',
    },

    {
        id: 4,
        name: 'Ben Trent',
        href: '#',
        imageSrc: '/img/team-4.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        title: 'Head of Relations',
    },
]

export default function Team() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl/8 font-bold tracking-tight text-black font-playfair text-primary text-center mb-6">Meet the team</h2>
                <p className="text-center text-pretty text-black mb-16">
                    Take a glance at the powerful minds behind this illustrous institution and <br />
                    the value we give out to society.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group relative">
                            <img
                                alt={member.imageAlt}
                                src={member.imageSrc}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-black text-lg">
                                        <a href={member.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {member.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">{member.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
