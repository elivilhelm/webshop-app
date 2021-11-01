import { useEffect, useState } from "react";
import ProductCard from './components/ProductCard';


function MyApp({ Component, pageProps }) {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
      );
      //console.log(res);
      const data = await res.json();
      //console.log(data);

      setDeck(data);
    }

    getData();
  }, []);


  useEffect(() => {
    async function setCardsArray() {
      const cardsArray = [];
      for (let i = 0; i < 200; i = i + 15) {
        cardsArray.push(deck[i]);
      }

      setCards(cardsArray);
    }
    setCardsArray();
  }, [deck]);


  return (
    <div className="fluid-container w-100">
      <div className="row">
        <div className="col-4"><ProductCard /></div>
        <div className="col-4"><ProductCard /></div>
        <div className="col-4"><ProductCard /></div>
      </div>
    </div>
  )
}

export default MyApp;