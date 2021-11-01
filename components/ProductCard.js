import React from "react";
import DigimonImage from "./digimonImage";

const ProductCard = (props) => (
  <div className="cardContainer">
    <section className="cardMain">
      <a href="#" className="cardType">
        <p>
          <small>{props.type}</small>
        </p>
      </a>
      <img src={props.image} className="digPic" />
      <a href="#" className="cardName">
        <h1 className="cardName">{props.name}</h1>
      </a>
      <a href="#" className="cardPrice">
        <h4 className="cardName">{props.price}$</h4>
      </a>
      <p >
        <small className="description-text">
          {props.description}
        </small>
      </p>
    </section>
  </div>
);
export default ProductCard;
