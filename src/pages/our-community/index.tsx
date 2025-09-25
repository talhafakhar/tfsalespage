import HeroSection from "@/components/OurCommunity/HeroSection";
import Footer from "@/components/Footer/footer";
import { NextSeo, WebPageJsonLd} from "next-seo";
import React from "react";
import CommunityChannels from "@/components/OurCommunity/ReadyToJoinSection";
import CommunitySection from "@/components/OurCommunity/OurCommunitySection";
import AboutSection from "@/components/OurCommunity/AboutStartupulseSection";
import SuccessStoriesSection from "@/components/OurCommunity/SuccessStoriesSection";
import PartnersSection from "@/components/OurCommunity/ClientLogoSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import FactsSection from "@/components/OurCommunity/FactAndFifureSection";
export default function OurCommunity() {


    return (
        <>
            <NextSeo
                title="Our Community | TF Business Solution"
                description=" Join the TF Business Solution community of growth-minded entrepreneurs and professionals. Access exclusive resources, events, and insights to help your business thrive."
                canonical="https://tfbusinesssolution.com/our-community"
                additionalMetaTags={[
                    { name: 'keywords', content: 'Our Community, TF Business Solution Community, Business Growth Network, Entrepreneur Network, Professional Development, Business Resources, Growth-Minded Entrepreneurs, Business Events, Networking Opportunities' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'profile',
                    url: 'https://tfbusinesssolution.com/our-community',
                    title: 'Our Community | TF Business Solution',
                    description: 'Join the TF Business Solution community of growth-minded entrepreneurs and professionals. Access exclusive resources, events, and insights to help your business thrive.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/our-community-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution Team – Our Community',
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
                id="https://tfbusinesssolution.com/our-community/#webpage"
                url="https://tfbusinesssolution.com/our-community"
                name="Our Community | TF Business Solution"
                description="Join the TF Business Solution community of growth-minded entrepreneurs and professionals. Access exclusive resources, events, and insights to help your business thrive."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/our-community?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <div>
                <div>
                    <HeroSection/>
                    <AboutSection/>
                    <CommunitySection/>
                    <FactsSection/>
                    <SuccessStoriesSection/>
                    <PartnersSection/>
                    <FAQSection
                        faqs={[
                            {
                                id: 1,
                                question: "What is Startupulse and how does it work?",
                                answer: (
                                    <p>
                                        Startupulse is a community-driven platform where founders, freelancers, and
                                        professionals connect, share knowledge, and collaborate. You get access to events,
                                        resources, and networking opportunities that help you grow faster.
                                    </p>
                                ),
                            },
                            {
                                id: 2,
                                question: "Who can join Startupulse?",
                                answer: (
                                    <p>
                                        Anyone who is passionate about startups, entrepreneurship, and innovation can join.
                                        Whether you’re a founder, student, investor, or just curious about the startup world,
                                        you’re welcome here.
                                    </p>
                                ),
                            },
                            {
                                id: 3,
                                question: "Does it cost anything to be part of the community?",
                                answer: (
                                    <p>
                                        Joining the core community is free. We also offer premium memberships that include
                                        exclusive events, mentorship sessions, and early access to partner programs.
                                    </p>
                                ),
                            },
                            {
                                id: 4,
                                question: "What kind of benefits do members get?",
                                answer: (
                                    <p>
                                        Members get access to networking events, startup resources, mentorship opportunities,
                                        collaborations, and discounts from our partner companies. It’s a space to learn, grow,
                                        and make meaningful connections.
                                    </p>
                                ),
                            },
                            {
                                id: 5,
                                question: "How do I get started with Startupulse?",
                                answer: (
                                    <p>
                                        Simply sign up on our website and join our community spaces. You can participate in
                                        discussions, attend events, and connect with other members right away.
                                    </p>
                                ),
                            },
                        ]}
                        fromOurCommunityPage={true}
                    />
                    <CommunityChannels/>
                    <Footer/>
                </div>
            </div>
        </>
    );
}
