//import { useEffect, useState } from "react";

export const getStaticProps = async() =>{ //this function runs at buildtime as our app is built and our components rendered
  
  const res = await fetch(
    "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
  );

  const data = await res.json();
    

  return{
    props:{digimonCards: data} //Kommer att skickas till pagecomponent i form av props

  }
  
}

function cardsData  ({digimonCards}){

return(
  
  <div></div>

)

}


function MyApp({ Component, pageProps}) {
  
  return <Component {...pageProps} />;
  
  

  

  
  
  

}


export default cardsData;


/*const [deck, setDeck] = useState({});
  const [cards, setCards] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
      );
      
      const data = await res.json();
      console.log(data);

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
  }, [deck]);*/