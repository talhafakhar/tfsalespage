import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {PlusCircle} from "lucide-react";

interface FAQ {
    id: number;
    question: string;
    answer: React.ReactNode;
}
interface FAQSectionProps {
    faqs: FAQ[];
}
const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    const [activeItems, setActiveItems] = useState<number[]>([]);
    const toggleItem = (id: number) => {
        if (activeItems.includes(id)) {
            setActiveItems(activeItems.filter(itemId => itemId !== id));
        } else {
            setActiveItems([...activeItems, id]);
        }
    };


    return (
        <section className='bg-secondary'>
            <div className="max-w-3xl mx-auto px-4 py-10 md:py-20">
                <h2 className=" flex  gap-4 items-center mb-8 ">
                    <span className="text-primary text-5xl font-bold">FAQS</span>
                    <span className="text-white"> - Your doubts, cleared in seconds</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((item:any) => (
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