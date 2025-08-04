import React, {useState} from 'react';
import Image from "next/image";

const ContactForm = () => {
    const [focusedField, setFocusedField] = useState(null);
    return (
        <div className=" flex items-center justify-center p-4">
            <div className="container nx-auto w-full bg-white border border-secondary rounded-2xl  overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-secondary text-white p-8 lg:p-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                            Ready to Scale Your Business?
                        </h2>
                        <p className="text-gray-300  leading-relaxed">
                            Get fractional C-level executives and complete teams working as your employees. We deliver outstanding results without the agency markup or overhead.
                        </p>
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/services/contact-3d.webp" alt="Contact Us" loading="lazy" width={400} height={400}/>
                        </div>
                    </div>

                    <div className="bg-white p-8 lg:p-12">
                        <div className="space-y-6">
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
                                    LinkedIn/X/Instagram <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Please provide link"
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
                                    NDA Required <span className="text-red-500">*</span>
                                </label>
                                <select
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg transition-all duration-300
                                              ${focusedField === 'name'
                                        ? 'border-black shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }
                                            focus:outline-none text-black placeholder:text-gray-400`}
                                >
                                    <option value="" disabled selected>
                                        Select an option
                                    </option>
                                    <option value="yes">Yes, NDA required</option>
                                    <option value="no">No, NDA not needed</option>
                                    <option value="no">Not sure</option>
                                </select>
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

export default ContactForm;