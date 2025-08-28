import React from "react";
import {NextSeo, WebPageJsonLd} from "next-seo";
import HeroSection from "@/components/SalesConsulting/HeroSection";
import ConsultingSection from "@/components/SalesConsulting/WhoSection";
import WhySalesWrong from "@/components/SalesConsulting/WhySection";
import FoundersSection from "@/components/SalesConsulting/FoundersSalesSection";
import StorySection from "@/components/SalesConsulting/StorySection";
import ClientProofSection from "@/components/SalesConsulting/HappyClientSection";
import TakeFirstStepBanner from "@/components/SalesConsulting/Banner";
import SalesStrategySection from "@/components/SalesConsulting/SalesStrategySection";
import SalesIssuesSection from "@/components/SalesConsulting/ SalesIssuesSection";
import HelpSection from "@/components/SalesConsulting/HelpSection";
import ConsultancyOffer from "@/components/SalesConsulting/ConsultancyOffer";
import VideoTestimonials from "@/components/SalesConsulting/VideoReviewSection";
import WhoIsThisFor from "@/components/SalesConsulting/WhoIsThisFor";
import Footer from "@/components/Footer/footer";

export default function SalesConsultationServicePage() {
    return (
        <div>
            <NextSeo
                title="Sales Consulting & Training – Boost B2B Sales Fast"
                description="Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today."
                canonical="https://tfbusinesssolution.com/sales-consulting"
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
                    url: 'https://tfbusinesssolution.com/sales-consulting',
                    title: 'Sales Consulting & Training – Boost B2B Sales Fast',
                    description: 'Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/sales-consulting-og.jpg',
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
                id="https://tfbusinesssolution.com/sales-consulting/#webpage"
                url="https://tfbusinesssolution.com/sales-consulting"
                name="Sales Consulting & Training – Boost B2B Sales Fast"
                description="Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/sales-consulting?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <HeroSection/>
            <ConsultingSection/>
            <WhySalesWrong/>
            <FoundersSection/>
            <StorySection/>
            <ClientProofSection/>
            <TakeFirstStepBanner/>
            <SalesStrategySection/>
            <SalesIssuesSection/>
            <HelpSection/>
            <ConsultancyOffer/>
            <VideoTestimonials/>
            <WhoIsThisFor/>
            <Footer/>
        </div>
    );
}
