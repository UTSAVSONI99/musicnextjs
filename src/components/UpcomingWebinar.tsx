
'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Custom Web Design',
      description: 'We create visually stunning websites tailored to your brand’s identity, designed to engage and convert your audience into loyal customers.',
      slug: 'custom-web-design',
      isFeatured: true,
    },
    {
      title: 'Marketing Pages That Convert',
      description: 'Our expertise lies in building high-quality marketing pages that not only capture attention but also drive results for your business.',
      slug: 'marketing-pages-that-convert',
      isFeatured: true,
    },
    {
      title: 'E-Commerce Development',
      description: 'Let us help you create an intuitive and responsive online store that elevates your products and provides a seamless shopping experience.',
      slug: 'e-commerce-development',
      isFeatured: true,
    },
    {
      title: 'Responsive Web Development',
      description: 'Your website will look great on any device. We ensure your site is fully responsive, delivering an optimized experience for all screen sizes.',
      slug: 'responsive-web-development',
      isFeatured: true,
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'We build websites with SEO best practices in mind to help your site rank higher in search engines, driving organic traffic to your business.',
      slug: 'seo-and-digital-marketing',
      isFeatured: true,
    },
    {
      title: 'Ongoing Support & Maintenance',
      description: 'We’re here to support your website long after launch. Our maintenance services ensure that your site stays secure, up-to-date, and performing at its best.',
      slug: 'ongoing-support-and-maintenance',
      isFeatured: true,
    },

  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Digital Presence</p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: webinar.slug
              }
            ))}
          />
        </div>

        {/* <div className="mt-10 text-center">
          <Link href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default UpcomingWebinars