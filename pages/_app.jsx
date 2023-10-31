import Footer from '@/components/footer/Footer';
import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { AnimatePresence,motion } from 'framer-motion';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  
    const router = useRouter().route


  return( 
    <>
      {router ==="/game" ? (
        <AnimatePresence initial={true}>
          <Component {...pageProps}/>
          <motion.footer
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0 }}
                transition={{
                duration: 0.8 ,
                type: "tween",
                stiffness: 260,
                damping: 20,}}
          key={"something"}>
                    
                <Footer/>
                
            </motion.footer>
        </AnimatePresence>
      ) : (
        <Layout>
           <Component {...pageProps}/>
        </Layout>
      )}
      
    
    </>
   );
}
