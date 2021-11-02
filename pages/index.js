import ProductCard from "../components/ProductCard";

export const getStaticProps = async() =>{ //this function runs at buildtime as our app is built and our components rendered
  
  const res = await fetch(
    "https://digimoncard.io/api-public/search.php?type=digimon&sort=name&sortdirection=desc&series=Digimon Card Game"
  );

  const data = await res.json();
    
  return{
    props:{digimonCards: data} //Kommer att skickas till pagecomponent i form av props

  }
}

export default function Home(){
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
