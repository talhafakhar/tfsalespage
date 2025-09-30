'use client';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import {easeOut, motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import React, {useEffect} from 'react';

type TransformProps = {
    title: string;
    titleTwo:string;
    description: string;
    buttonText: string;
    src: string;
    width?: number;
};
const Transform: React.FC<TransformProps> = ({title,titleTwo, description, buttonText,src,width}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const sectionVariant = {
        hidden: {opacity: 0, scale: 0.9, y: 50},
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {duration: 1, ease: easeOut},
        },
    };

    const textVariant = {
        hidden: {opacity: 0, y: 40},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 1, delay: 0.2},
        },
    };

    return (
        <section className="py-5 px-6" ref={ref}>
            <div className="container mx-auto flex md:flex-row flex-col-reverse gap-5 w-full items-center">
                <motion.div
                    initial="hidden"
                    animate={
                        inView
                            ? {
                                opacity: 1,
                                y: [0, -20, 0],
                            }
                            : {
                                opacity: 100,
                            }
                    }
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    variants={sectionVariant}
                    className="md:w-1/2 w-full"
                >
                    <Image
                        src={src}
                        alt="3d"
                        width={width}
                        loading="lazy"
                        height={400}
                        className="object-cover mx-auto"
                    />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={textVariant}
                    className="md:w-1/2 w-full"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        {title} <br/>{titleTwo}
                    </h2>
                    <p className="text-lg mb-6">
                        {description}
                    </p>

                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {duration: 0.6, delay: 0.4},
                            },
                        }}
                    >
                        <div
                            className="flex flex-col lg:flex-row gap-2 sm:gap-6 justify-center md:justify-start items-center mt-8">
                            <button
                                onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                                className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none">
                                {buttonText}
                                <span
                                    className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4"/>
                </span>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Transform;
