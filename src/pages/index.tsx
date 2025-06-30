import HeroSection from "@/components/HomePage/HeroSection";
import CoCreate from "@/components/HomePage/CoCreateSection";
import FoundersSection from "@/components/HomePage/BuildForFounderSection";
import SuccessSnapshots from "@/components/HomePage/SuccessSnapshotsSection";
import FinalCTASection from "@/components/HomePage/FinalCTASection";
import Footer from "@/components/Footer/footer";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";
import InfiniteLogoSlider from "@/components/Common/ClientsSlider";
import CanvasHeroSection from "@/components/HomePage/HeadlineSection";
import NewServicesSection from "@/components/HomePage/NewServiceSection";
export default function Home() {
    return (
        <>
            <NextSeo
                title="TF Business Solution – Fractional Leadership & Sales Automation Services"
                description="TF Business Solution offers AaaS, Fractional CMO/CTO/SDR services, Sales Automation, and Consultation solutions to help businesses scale smarter."
                canonical="https://tfbusinesssolution.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    { name: 'keywords', content: 'Fractional CMO, CTO, SDR, AAS, Sales Automation, Business Consulting' },
                    { property: 'dc:creator', content: 'TF Business Solution' },
                ]}
                openGraph={{
                    url: 'https://tfbusinesssolution.com/',
                    title: 'TF Business Solution – Fractional & Sales Automation Services',
                    description: 'Explore TF Business Solution’s expert services: AaaS, Fractional CMO/CTO/SDR, Sales Automation, and Consultation for modern businesses.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution Landing Page',
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

            <OrganizationJsonLd
                type="Organization"
                id="https://tfbusinesssolution.com/"
                name="TF Business Solution"
                url="https://tfbusinesssolution.com/"
                logo="https://tfbusinesssolution.com/images/logo.png"
                sameAs={[
                    'https://www.facebook.com/TFBusiness',
                    'https://twitter.com/TFBusiness',
                    'https://www.linkedin.com/company/tfbusinesssolution/',
                ]}
                contactPoints={[
                    {
                        telephone: '+1-234-567-890',
                        contactType: 'Customer Service',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
                address={{
                    streetAddress: '456 Strategy Avenue',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    postalCode: '10001',
                    addressCountry: 'US',
                }}
            />

            <WebPageJsonLd
                url="https://tfbusinesssolution.com/"
                name="TF Business Solution"
                description="TF Business Solution offers expert AaaS, fractional leadership (CMO, CTO, SDR), and automation/consulting services to help companies grow efficiently."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/',
                    queryInput: 'required name=search_term_string',
                }}
                id="https://tfbusinesssolution.com/"
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'What services does TF Business Solution provide?',
                        acceptedAnswerText: 'We provide AaaS, Fractional CMO/CTO/SDR, Sales Automation, and Business Consultation services.',
                    },
                    {
                        questionName: 'Who can benefit from TF Business Solution services?',
                        acceptedAnswerText: 'Startups, SMBs, and growing enterprises looking to scale operations and leadership capabilities cost-effectively.',
                    },
                ]}
            />
            <HeroSection/>
            <InfiniteLogoSlider/>
            <CanvasHeroSection/>
            <NewServicesSection/>
            <CoCreate/>
            <FoundersSection/>
            <SuccessSnapshots/>
            <FinalCTASection/>
            <Footer/>
        </>
    );
}
