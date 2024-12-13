
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [

    {
        title: 'Build Your Digital Presence with Us: A Tailored Journey in Web Development',
        description: 'Embark on a digital journey crafted for your business. Our personalized web development services cater to your unique needs, ensuring your brand stands out online. With our expert support, your vision will come to life through cutting-edge digital solutions.'
    },
    {
        title: 'Transform Your Ideas into Reality: Custom Web Solutions for Every Business',
        description: 'Our approach is designed to help you turn your ideas into engaging, functional websites. Whether you’re starting from scratch or upgrading your digital presence, we build tailored solutions that help your business thrive in the digital world.'
    },
    {
        title: 'Real-Time Collaboration & Feedback',
        description: 'Experience seamless collaboration with real-time feedback as we work together on your website. Our interactive approach ensures your input is valued throughout the development process, creating a site that truly represents your business.'
    },
    {
        title: 'Innovative Web Development Strategy',
        description: 'We keep your business ahead of the curve with a constantly evolving approach to web development. Our strategies are designed to incorporate the latest trends and technologies, ensuring your website stays current and effective.'
    },
    {
        title: 'Endless Opportunities for Growth',
        description: 'Our continuous support and resource library give you ongoing opportunities to grow your online presence. Whether you need updates, new features, or expansions, we ensure your website evolves with your business needs.'
    }
];

function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}

export default WhyChooseUs