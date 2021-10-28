import '../styles/footer.css'
import '../styles/globals.css'
import '../styles/header.css'
import { useEffect, useState } from "react";

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

  console.log(deck);
  //console.log(cards);
  

  return <Component {...pageProps} />;
}

export default MyApp;
