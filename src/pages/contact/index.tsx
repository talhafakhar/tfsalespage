import React from 'react';
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from 'next-seo';

import ContactUsPage from "@/components/ContactPage/ContactUs";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/footer";

const Contact: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Contact Us | TF Business Solution"
                description="Get in touch with TF Business Solution for AaaS, Fractional CMO/CTO/SDR, Sales Automation, and consulting services. We're here to help your business grow."
                canonical="https://tfbusinesssolution.com/contact"
                additionalMetaTags={[
                    { name: 'keywords', content: 'Contact TF Business Solution, Business Services Contact, AaaS Contact, Fractional CMO Contact, Sales Automation Inquiry' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://tfbusinesssolution.com/contact',
                    title: 'Contact TF Business Solution | Business Growth Services',
                    description: 'Reach out to TF Business Solution for expert fractional leadership, sales automation, and growth consulting services.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/contact-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Contact TF Business Solution',
                        },
                    ],
                    site_name: 'TF Business Solution',
                }}
                twitter={{
                    handle: '@TFBusiness',
                    site: '@TFBusiness',
                    cardType: 'summary_large_image',
                }}
            />

            <WebPageJsonLd
                id="https://tfbusinesssolution.com/contact/#webpage"
                url="https://tfbusinesssolution.com/contact"
                name="Contact Us | TF Business Solution"
                description="Contact TF Business Solution for expert services in AaaS, fractional executive roles, sales automation, and business growth consulting."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/contact?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: 'https://tfbusinesssolution.com/',
                    },
                    {
                        position: 2,
                        name: 'Contact Us',
                        item: 'https://tfbusinesssolution.com/contact',
                    },
                ]}
            />

            <Navbar />
            <ContactUsPage />
            <Footer />
        </>
    );
};

export default Contact;
