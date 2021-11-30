import '../styles/style.css'
import '../styles/footer.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { CartContext } from '../context/context';
import "../styles/cart.css"


import ThemeProvider from '../context/themeProvider';
import Layout from '../components/Layout';
import { useState } from 'react';


export default function Home({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  return (
    <div>
      <CartContext.Provider value={{cart, setCart}}>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>

        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        </CartContext.Provider>
        </div>
        );
}

