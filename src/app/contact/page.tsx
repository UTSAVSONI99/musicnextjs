
'use client'
import React, { FormEvent, useState } from 'react';
import { Meteors } from "@/components/ui/meteors";


function MusicSchoolContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { name, email, phoneNo, company, message });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            {/* Ensure the container is relative */}
            {/* Content with higher z-index */}
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                {/* Add relative and z-10 to bring content to the front */}
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    We&apos;re here to help with any questions about our web development services, digital solutions, or projects. Reach out and let us know how we can assist you in building your online presence.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <input
                        type="tel"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        placeholder="Your phone number"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your Company/Organization"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MusicSchoolContactUs;
