import DigimonImage from "./digimonImage";
import React, {useState} from 'react'
import {CartContext} from "../context/cartProvider";





const ProductCard = (props) =>{

  const[cart, setCart] = useContext(CartContext);

  const addToCart = ()=>{


  }
  
return(

  <div className="cardContainer">
    <section className="cardMain">
      <div className="top">
        <a href="#" className="cardID">
          <h7 className="cardnumber">{props.id}</h7>
        </a>
        <a href="#" className="cardType">
          <p>
            <small>{props.type}</small>
          </p>
        </a>
      </div>
      <img src={props.image} className="digPic" style={ {border: "2px solid " + props.color} }/>
      <a href="#" className="cardName">
        <h1 className="cardName">{props.name}</h1>
      </a>
      <a href="#" className="cardPrice">
        <h4 className="cardName">{props.price}$</h4>
      </a>
      <p>
        <small className="description-text">{props.description}</small>
      </p>
      <button>buy</button>
    </section>
  </div>
) 
}

export default ProductCard;
