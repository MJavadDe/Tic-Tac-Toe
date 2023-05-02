import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  
    const router = useRouter().route
    console.log(router.route);

  return( 
    <>
      {router == "/404" ? (
        <Component {...pageProps}/>
      ) : (
        <Layout>
           <Component {...pageProps}/>
        </Layout>
      )}
      
    
    </>
   );
}
