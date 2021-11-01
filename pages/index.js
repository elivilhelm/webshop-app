import ProductCard from "../../webshop-app/components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useContext } from "react";
import { ThemeContext } from "styled-components";
import { datamine } from "../pages/index";
import { render } from "react-dom";

export const getStaticProps = async () => {
  //this function runs at buildtime as our app is built and our components rendered

  const res = await fetch(
    "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
  );

  const data = await res.json();
  console.log(data);

  return {
    props: { digimonCards: data }, //Kommer att skickas till pagecomponent i form av props
  };
};



export default function Home({ digimonCards }) {
  console.log(digimonCards);
  return (
    <div className="productContainer">
      {digimonCards.map(
        (digimonCards, index) =>
          index < 5 && (
            <ProductCard
              name={digimonCards.name}
              image={digimonCards.image_url}
              price={digimonCards.play_cost}
              description={digimonCards.maineffect}
              type={digimonCards.type}
            />
          )
      )}
    </div>
  );
}

/*
 <ProductCard
        name={digimonCards[1].name}
        price="12.99"
        img={digimonCards[1].image_url}
        description={digimonCards[1].maineffect}
        type={digimonCards[1].type}
      />
      <ProductCard
        name={digimonCards[2].name}
        price="12.99"
        img={digimonCards[2].image_url}
        description={digimonCards[2].maineffect}
        type={digimonCards[2].type}
      />
      <ProductCard
        name={digimonCards[3].name}
        price="12.99"
        img={digimonCards[3].image_url}
        description={digimonCards[3].maineffect}
        type={digimonCards[3].type}
      />
      <ProductCard
        name={digimonCards[4].name}
        price="12.99"
        img={digimonCards[4].image_url}
        description={digimonCards[4].maineffect}
        type={digimonCards[4].type}
      />
      <ProductCard
        name={digimonCards[5].name}
        price="12.99"
        img={digimonCards[5].image_url}
        description={digimonCards[5].maineffect}
        type={digimonCards[5].type}
      />
*/
