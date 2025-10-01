import React from "react";
import { motion } from "framer-motion";


const channels: any[] = [
    {
        icon: <svg aria-hidden="true" className="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>,
        title: "WhatsApp Official Channel",
        description: "Keep yourself informed with the latest updates, news flashes, and interesting conversations on our Whatsapp.",
        link: "https://whatsapp.com",
        cardBg: "border-2 border-primary",
    },
    {
        icon: <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512"
                   xmlns="http://www.w3.org/2000/svg">
            <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
        </svg>,
        title: "Facebook Official Channel",
        description:
            "Subscribe to our facebook channel for insightful videos, tutorials, and interviews with industry experts.",
        link: "https://facebook.com",
    },
    {
        icon: <svg aria-hidden="true" className="e-font-icon-svg e-fab-discord" viewBox="0 0 448 512"
                   xmlns="http://www.w3.org/2000/svg">
            <path
                d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
        </svg>,
        title: "Discord Official Channel",
        description:
            "Receive a curated selection of awesome stories and videos related to data science and machine learning, delivered straight to your email.",
        link: "https://discord.com",
    },
];

export default function CommunityChannels() {
    return (
        <section className="py-12 relative px-4 w-full overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
           <div className="relative z-10">
               <h2 className="text-center text-3xl md:text-4xl font-bold   mb-10">
                   Ready to Join the <span className="text-primary">Community Channel</span>
               </h2>
               <p className="text-center mb-8">
                   Choose your preferred platform and become a part of our vibrant community today!
               </p>


               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                   {channels.map((channel, index) => (
                       <motion.div
                           key={index}
                           initial={{ opacity: 0, y: 40 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: index * 0.2 }}
                           whileHover={{ scale: 1.05 }}
                           viewport={{ once: true }}
                           className={`rounded-xl p-6 flex flex-col bg-white justify-between shadow-md border border-gray-200 ${
                               channel.cardBg ? channel.cardBg : "bg-white"
                           }`}
                       >
                           <span className="w-16 h-16 mb-6">{channel.icon}</span>
                           <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                           <p className="text-sm mb-6">{channel.description}</p>

                           <a
                               href={channel.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold border border-secondary text-secondary transition-all hover:bg-secondary hover:text-white"
                           >
                               Join Now →
                           </a>
                       </motion.div>
                   ))}
               </div>
           </div>
        </section>
    );
}
