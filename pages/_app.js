import React from "react";
import Header from "../../webshop-app/components/header";
import Footer from "../../webshop-app/components/footer";
import ProductCard from "../../webshop-app/components/ProductCard";
import "../styles/style.css";
import "../styles/footer.css";
import "../styles/globals.css";
import "../styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useContext } from "react";
import { ThemeContext } from "styled-components";
import { datamine } from "../pages/index";

export default function Home({Component, pageProps}) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <button className="show-more">show more</button>
      <Footer />
    </div>
  );
}
