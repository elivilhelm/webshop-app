import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import '../styles/style.css'
import '../styles/footer.css';
import '../styles/globals.css';
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from "react";
import { ThemeContext } from 'styled-components';
import {datamine} from '../pages/index';



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
    console.log(digimonCards)

}



export default function Home() {
  
  

 
  return (
    
    <div>
      <Header />
      <datamine/>
      <div className="fluid-container w-100">
        <div className="row">
          <div className="col-4"><ProductCard /></div>
          <div className="col-4"><ProductCard /></div>
          <div className="col-4"><ProductCard /></div>
        </div>
      </div>
      
      <Footer />

      
    </div>
    
  )
}