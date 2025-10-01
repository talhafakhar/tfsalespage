import React from "react";
import {NextSeo, WebPageJsonLd} from "next-seo";
import HeroSection from "@/components/SalesConsulting/HeroSection";
import Footer from "@/components/Footer/footer";
export default function TfPortfolio() {
    return (
        <div>
            <NextSeo
                title=""
                description=""
                canonical="https://tfbusinesssolution.com/portfolio"
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'Sales Automation, CRM Automation, Lead Nurturing, Automated Sales Funnel, Outbound Automation, B2B Automation, Email Sequences, Follow-Up Automation, Sales Pipeline Automation'
                    },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'article',
                    url: 'https://tfbusinesssolution.com/portfolio',
                    title: 'Sales Consulting & Training – Boost B2B Sales Fast',
                    description: 'Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/portfolio-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Sales Automation Services – TF Business Solution',
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
                id="https://tfbusinesssolution.com/portfolio/#webpage"
                url="https://tfbusinesssolution.com/portfolio"
                name=""
                description=""
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/portfolio?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />
            <HeroSection/>

            <Footer/>
        </div>
    );
}
