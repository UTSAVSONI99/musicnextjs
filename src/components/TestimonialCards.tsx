'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        'quote': 'Working with this agency transformed the way I approach my business online. Their expertise helped me build a website that truly represents my brand.',
        'name': 'Priya Sharma',
        'title': 'Digital Marketing '
    },
    {
        'quote': 'The team provided exceptional support throughout the entire process. Not only did they create a beautiful website, but they also helped me optimize it for growth.',
        'name': 'Amit Patel',
        'title': 'Web Developer'
    },
    {
        'quote': 'Thanks to their personalized approach, my website now attracts more traffic and converts visitors into customers. I’m beyond satisfied with the results!',
        'name': 'Ramesh kumar',
        'title': 'E-commerce Business Owner',
    },
    {
        'quote': 'As a startup, I needed a partner who could bring my digital vision to life. This agency delivered exactly what I needed and more!',
        'name': 'Suresh Reddy',
        'title': 'Technology Consultant'
    },
    {
        'quote': 'The web development team not only built my site but also helped me understand how to maintain and update it. Their continued support has been invaluable.',
        'name': 'Ravi Kumar',
        'title': 'Food Business'
    }
];

function MusicSchoolTestimonials() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Success: Digital Solutions that Drive Growth</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonials