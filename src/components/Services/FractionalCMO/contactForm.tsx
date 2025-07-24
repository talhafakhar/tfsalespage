'use client';

import { ChevronDown } from 'lucide-react';
import React from 'react';

const ContactSalesForm: React.FC = () => {
    return (
        <div className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-10">
                    <div className="text-left">
                        <h2 className=" flex font-button  gap-4  font-bold items-center text-5xl  mb-4 ">
                            <span className="text-primary "> Visit{" "}</span>Our Office
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            We&#39;re located in Gulberg. Come by and let&#39;s meet!
                        </p>
                    </div>

                    <div className="w-full h-96 rounded-md overflow-hidden shadow-md">
                        <iframe
                            title="Hafeez Center Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.461414053529!2d74.34500337621552!3d31.511484747580056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919056dad6e533d%3A0x6a72c370e71f26f1!2sKickstart%20%7C%20Gulberg%2C%2062-C2!5e0!3m2!1sen!2s!4v1753366764459!5m2!1sen!2s"
                        />
                    </div>
                </div>

                {/* Right side: Contact form */}
                <form className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                                First name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 "
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                                Last name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 "
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                                Company
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 "
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 "
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">
                                Phone number
                            </label>
                            <div className="mt-2.5 flex rounded-md bg-white outline outline-1 outline-gray-300 focus-within:outline-2 ">
                                <div className="relative">
                                    <select
                                        id="country"
                                        name="country"
                                        className="appearance-none rounded-l-md py-2 pr-7 pl-3.5 text-base text-gray-500 focus:outline-none sm:text-sm"
                                    >
                                        <option>PK</option>
                                        <option>US</option>
                                        <option>UK</option>
                                    </select>
                                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
                                </div>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="0300-1234567"
                                    className="flex-1 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let&#39;s talk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSalesForm;
