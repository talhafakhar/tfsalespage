import React, {useState} from 'react';
import {Mail, MapPin, MessageSquare, Phone, Send, User, Users} from 'lucide-react';
import CTASection from "@/components/ContactPage/TextSlider";
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
            <div className="text-center py-16 bg-white">
                <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4">
                    CONNECT WITH US. WE&#39;RE HERE TO HELP
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-black">
                    Get in touch
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            {/*<img*/}
                            {/*    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"*/}
                            {/*    alt="Professional consultant ready to help"*/}
                            {/*    className="w-full h-[600px] object-cover"*/}
                            {/*/>*/}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="space-y-6">
                            {/* Name Fields */}
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

                            {/* Subject */}
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

                            {/* Message */}
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

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-primary  text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-5 h-5"/>
                                Submit message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {/* Visit Us */}
                    <div
                        className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div
                            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <MapPin className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">Visit Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                            6587 Roller Derby Lane, Canada, and<br/>
                            760 Grant Street, San Francisco
                        </p>
                    </div>

                    {/* Call Us */}
                    <div
                        className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div
                            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
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

                    {/* Join Our Community */}
                    <div
                        className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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
            </div>
            <CTASection/>
        </div>
    );
};

export default ContactUsPage;