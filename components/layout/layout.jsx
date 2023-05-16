import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

const Layout = ({children}) => {
    return (
        <>
            <motion.header
                initial={{ y: -300, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                transition={{
                duration: 0.8 ,
                type: "tween",
                stiffness: 260,
                damping: 20,}}
                >

                <Header/>
            
            </motion.header>
                <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                        duration: 0.8 ,
                        type: "tween",
                        stiffness: 260,
                        damping: 20,}}>
                    <main>{children}</main>
                </motion.div>
            <motion.footer
                initial={{ x: -300, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                duration: 0.8 ,
                type: "tween",
                stiffness: 260,
                damping: 20,}}>
                    
                <Footer/>
                
            </motion.footer>
        </>
    );
};

export default Layout;