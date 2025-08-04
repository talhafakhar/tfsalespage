import React, {useState} from 'react';
import {ArrowRight, Mail, MapPin, MessageSquare, Phone, Send, User, Users} from 'lucide-react';
import Image from "next/image";
const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    return (
        <div>
            <div className="text-center py-20 md:pt-28 pb-10 px-4 bg-white">
                <h1 className="text-4xl md:text-5xl font-bold  mb-3">
                    Get in <span className="text-primary">{" "}Touch</span>
                </h1>
                <p className="text-sm font-medium text-gray-600 tracking-wide uppercase ">
                    CONNECT WITH US. WE&#39;RE HERE TO HELP
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <div className="flex justify-between items-center flex-col md:flex-row gap-8">
                    <div className="bg-white rounded-2xl border shadow-xl p-8">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <User
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="First name"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <User
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Last Name"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">
                                        Phone
                                    </label>
                                    <div className="relative">
                                        <Phone
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-black mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <MessageSquare
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-black mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={()=>handleInputChange}
                                    placeholder="Tell us about your project"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-primary  text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-5 h-5"/>
                                Submit message
                            </button>
                        </div>
                    </div>
                    <div className="relative ">
                        <div className="overflow-hidden">
                            <Image src="/assets/contact/mail-astornot.webp" alt="Professional consultant ready to help" width={500} loading="lazy" height={500} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="text-center p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <MapPin className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">Visit Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                            6587 Roller Derby Lane, Canada, and<br/>
                            760 Grant Street, San Francisco
                        </p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">Call Us</h3>
                        <p className="text-gray-600 mb-2">
                            Call us and we&#39;ll get back to you soon.
                        </p>
                        <p className="text-black font-semibold text-lg">
                            (123) 456-7890
                        </p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow">
                        <div
                            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">Join Our Community</h3>
                        <p className="text-gray-600">
                            Connect with <span
                            className="text-primary font-semibold">like-minded professionals</span><br/>
                            and stay updated.
                        </p>
                    </div>
                </div>
                <div className=" flex justify-center mt-12">
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Schedule a call
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;