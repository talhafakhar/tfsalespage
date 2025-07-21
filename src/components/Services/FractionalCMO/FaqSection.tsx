import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {PlusCircle} from "lucide-react";

interface FAQItem {
    id: number;
    question: string;
    answer: string | React.ReactNode;
}

const FAQSection: React.FC = () => {
    const [activeItems, setActiveItems] = useState<number[]>([]);
    const toggleItem = (id: number) => {
        if (activeItems.includes(id)) {
            setActiveItems(activeItems.filter(itemId => itemId !== id));
        } else {
            setActiveItems([...activeItems, id]);
        }
    };

    const faqData: FAQItem[] = [
        {
            id: 1,
            question: "How much does it cost to hire a web development company?",
            answer: (
                <p>
                    The cost of hiring a custom web application development company is determined by the composition of
                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                    detailed estimate for your project, please reach out to us with your specific requirements.
                </p>
            )
        },
        {
            id: 2,
            question: "What is custom programming?",
            answer: (
                <p>
                    The cost of hiring a custom web application development company is determined by the composition of
                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                    detailed estimate for your project, please reach out to us with your specific requirements.
                </p>
            )
        },
        {
            id: 3,
            question: "What are the examples of custom web apps?",
            answer: (
                <p>
                    The cost of hiring a custom web application development company is determined by the composition of
                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                    detailed estimate for your project, please reach out to us with your specific requirements.
                </p>
            )
        },
        {
            id: 4,
            question: "What is custom programming?",
            answer: (
                <p>
                    The cost of hiring a custom web application development company is determined by the composition of
                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                    detailed estimate for your project, please reach out to us with your specific requirements.
                </p>
            )
        },
        {
            id: 5,
            question: "How much does it cost to hire a web development company?",
            answer: (
                <p>
                    The cost of hiring a custom web application development company is determined by the composition of
                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                    detailed estimate for your project, please reach out to us with your specific requirements.
                </p>
            )
        },
        {
            id: 6,
            question: "What are the examples of custom web apps?",
            answer: (
                <p>
                    The cost of hiring a custom web application development company is determined by the composition of
                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                    detailed estimate for your project, please reach out to us with your specific requirements.
                </p>
            )
        }
    ];

    return (
        <section className='bg-secondary'>
            <div className="max-w-3xl mx-auto px-4 py-10 md:py-20">
                <h2 className=" flex  gap-4 items-center mb-8 ">
                    <span className="text-primary text-5xl font-bold">FAQS</span>
                    <span className="text-white"> - Your doubts, cleared in seconds</span>
                </h2>

                <div className="space-y-4">
                    {faqData.map((item) => (
                        <motion.div
                            key={item.id}
                            className="border-b border-gray-200 pb-4"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: item.id * 0.1}}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer py-3"
                                onClick={() => toggleItem(item.id)}
                            >
                                <h2 className="text-xl font-semibold text-white">{item.question}</h2>
                                <motion.div
                                    animate={{rotate: activeItems.includes(item.id) ? 45 : 0}}
                                    transition={{duration: 0.2}}
                                    className="  text-xl"
                                >
                                    <PlusCircle className='text-primary'/>
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeItems.includes(item.id) && (
                                    <motion.div
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.3, ease: "easeInOut"}}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-sm text-gray-400">
                                            {item.answer && item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>);
};

export default FAQSection;