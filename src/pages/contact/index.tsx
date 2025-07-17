import React from 'react';
import ContactUsPage from "@/components/ContactPage/ContactUs";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/footer";

const Contact: React.FC = () => {
    return (
        <>
            <Navbar/>
            <ContactUsPage/>
            <Footer/>
        </>
    );
};

export default Contact;