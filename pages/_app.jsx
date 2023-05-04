import Footer from '@/components/footer/Footer';
import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  
    const router = useRouter().route
    console.log(router.route);

  return( 
    <>
      {router =="/game" ? (
        <>
          <Component {...pageProps}/>
          <Footer/>
        </>
      ) : (
        <Layout>
           <Component {...pageProps}/>
        </Layout>
      )}
      
    
    </>
   );
}
