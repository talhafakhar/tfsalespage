import Footer from "@/components/Footer/footer";
import {NextSeo, WebPageJsonLd} from "next-seo";
import React from "react";
import ClientReviewProof from "@/components/ClientReviews/clientReviewsSection";
import TestimonialSlider from "@/components/ClientReviews/videoReviewSection";

export default function ClientReview() {
    return (
        <>
            <NextSeo
                title="Client Reviews | TF Business Solution"
                description=""
                canonical="https://tfbusinesssolution.com/client-review"
                additionalMetaTags={[
                    {name: 'keywords', content: ''},
                    {name: 'author', content: 'TF Business Solution'},
                    {name: 'robots', content: 'index, follow'},
                ]}
                openGraph={{
                    type: 'profile',
                    url: 'https://tfbusinesssolution.com/client-review',
                    title: 'Client Reviews | TF Business Solution',
                    description: '',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/client-review-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution Team – Client Reviews',
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
                id="https://tfbusinesssolution.com/client-review/#webpage"
                url="https://tfbusinesssolution.com/client-review"
                name="Client Reviews | TF Business Solution"
                description=""
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/client-review?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />
            <div>
                <ClientReviewProof/>
                <TestimonialSlider/>
                <Footer/>
            </div>
        </>
    )
}
