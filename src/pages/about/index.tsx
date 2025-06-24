import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Us - TF Business Solutions</title>
                <meta name="description" content="Learn about TF Business Solutions - our mission, vision, and the team behind innovative business transformation." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About TF Business Solutions</h1>
                            <p className="text-xl max-w-3xl mx-auto">
                                Empowering businesses through innovative solutions and strategic transformation since our inception.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default About;