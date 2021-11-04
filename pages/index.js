import ProductCard from "../../webshop-app/components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useContext } from "react";
import { ThemeContext } from "styled-components";
import { datamine } from "../pages/index";
import { render } from "react-dom";
import React, { useState } from "react";
import {CartContext} from '../context/cartProvider'

export const getStaticProps = async () => {
  //this function runs at buildtime as our app is built and our components rendered

  const res = await fetch(
    "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
  );

  const data = await res.json();

  return {
    props: { digimonCards: data }, //Kommer att skickas till pagecomponent i form av props
  };
};

function ReturnAPIdata({ digimonCards }) {
  const [limit, setLimit] = useState(5);
  return (
    <div>
      <div className="productContainer">
        {digimonCards.map(
          (digimonCards, index) =>
            index < limit && (
              <ProductCard
                name={digimonCards.name}
                image={digimonCards.image_url}
                price={digimonCards.play_cost}
                description={digimonCards.maineffect}
                type={digimonCards.type}
                color={digimonCards.color}
                id={digimonCards.cardnumber}
              />
            )
        )}
      </div>
      <button
        type="onClick"
        onClick={() => setLimit(limit + 5)}
        className="show-more"
      >
        show more
      </button>

    </div>
  );
}

export default function Home({ digimonCards }) {
  console.log(digimonCards);
  return (
    <div>
      <ReturnAPIdata digimonCards={digimonCards} />
    </div>
  );

}
