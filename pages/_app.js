import React from "react";
import Header from "../../webshop-app/components/header";
import Footer from "../../webshop-app/components/footer";
import "../styles/style.css";
import "../styles/footer.css";
import "../styles/globals.css";
import "../styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home({Component, pageProps}) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
