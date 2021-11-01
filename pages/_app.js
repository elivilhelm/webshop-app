import Header from "./components/header";
import Footer from "./components/footer";
import ProductCard from "./components/ProductCard";
import "../styles/style.css";
import "../styles/footer.css";
import "../styles/globals.css";
import "../styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useContext } from "react";
import { ThemeContext } from "styled-components";
import { datamine } from "../pages/index";

export const getStaticProps = async () => {
  //this function runs at buildtime as our app is built and our components rendered

  const res = await fetch(
    "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
  );

  const data = await res.json();
  console.log(data);

  return {
    props: { digimonCards: await res.json() }, //Kommer att skickas till pagecomponent i form av props
  };
  
};

export default function Home({digimonCards}) {
  return (
    <div>
      <Header />
      <ul>
      {digimonCards.map((post) => (
        <li>{post}</li>
      ))}
    </ul>
      <ProductCard name="Drake" price="12.99" img="https://cdn.vox-cdn.com/thumbor/uKKr0W08KEfCKPs3BiNR-ROo-dY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21940788/Digimon_Adventure_2020_episode_6.jpg"/>
      <ProductCard name="Johan" price="79.99" img="https://www.sfbok.se/sites/default/files/styles/1000x/sfbok/sfbokbilder/190/190880.jpg?bust=1542116955&itok=6vUOE9B4"/>
      <ProductCard name="Göran" price="120.99" img="https://imusic.dk/images/item/scaled/493/4260394338493/n-a-2019-digimon-adventure-staffel-1-vol-1-episoden-0-dvd-008.jpg"/>
      <Footer />      
    </div>
  );
}
