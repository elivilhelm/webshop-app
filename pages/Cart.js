import React, { useContext } from "react";
import { CartContext } from "../context/context";
//import "../styles/cart.css"


export default function Cart() {
    const { cart, setCart } = useContext(CartContext)
    const sumList = [];
    function emptyCart() {
        console.log(cart)
        return []
    }

    return (
        <div className="cardContainer">
            <section className="cart">
                <section className="cart-card">
                    {cart.map((Object) => {
                        sumList.push(Object.price)
                        return (
                            <div className="cart-item-row">
                                <img src={Object.image} className="digPic-cart"
                                    style={{ border: "2px solid " + Object.color }} />
                                <h6 className="cart-name">{Object.name}</h6>
                                <h6 className="cart-item-price">{Object.price}$</h6>
                            </div>
                        )
                    })}
                </section>
                <div className="total-cost">
                    <p>
                        Total cost: {sumList.length != 0 ? sumList.reduce((previousValue, currentValue) => previousValue + currentValue) : 0}$
                    </p>
                </div>
                <div className="empty-cart-button-div">
                    <button className="empty-cart-button" onClick={() => setCart(emptyCart)}> Empty cart </button>
                </div>
            </section>
        </div>
    );
}