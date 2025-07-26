import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const ContactSalesForm = () => {
    const [focusedField, setFocusedField] = useState(null);

    return (
        <div className=" flex items-center justify-center p-4">
            <div className="container nx-auto w-full bg-white border border-secondary rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-secondary text-white p-8 lg:p-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                            Contact Information
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            This statement reflects a dedication to customer satisfaction and a
                            commitment to delivering outstanding service and support.
                        </p>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-gray-200">789 Oak Lane, Lakeside, TX 54321</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-gray-200">470-601-1911</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-gray-200">pagedone1234@gmail.com</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                                <Facebook className="w-5 h-5 text-white" />
                            </button>
                            <button className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                                <Instagram className="w-5 h-5 text-white" />
                            </button>
                            <button className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                                <Linkedin className="w-5 h-5 text-white" />
                            </button>
                            <button className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                                <Youtube className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white p-8 lg:p-12">
                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Name"
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg transition-all duration-300
                                              ${focusedField === 'name'
                                        ? 'border-black shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                              focus:outline-none text-black placeholder:text-gray-400`}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Mail"
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg transition-all duration-300
                                              ${focusedField === 'email'
                                        ? 'border-black shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                              focus:outline-none text-black placeholder:text-gray-400`}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Mail"
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg transition-all duration-300
                                              ${focusedField === 'email'
                                        ? 'border-black shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                              focus:outline-none text-black placeholder:text-gray-400`}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Message"
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg transition-all duration-300 resize-none
                                              ${focusedField === 'description'
                                        ? 'border-black shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                              focus:outline-none text-black placeholder:text-gray-400`}
                                />
                            </div>
                            <button className="w-full bg-primary  text-white font-medium py-3 px-6 rounded-lg
                                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSalesForm;