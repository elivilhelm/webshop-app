import '../styles/style.css'
import '../styles/footer.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import ThemeProvider from './components/context/themeProvider';
import Layout from './components/Layout';

import React from "react";



export default function Home({Component, pageProps}) {
  return (
    <div>
      
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      
      <ThemeProvider>
    
      <Layout>
      
      <Component {...pageProps} />
      </Layout>
      </ThemeProvider>



    </div>
  );
}
