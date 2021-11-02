import DigimonImage from "../components/digimonImage";

const ProductCard = (props) => (
  <div className="cardContainer">
    <section className="cardMain">
      <a href="#" className="cardType">
        <p>
          <small>Digi-Egg</small>
        </p>
      </a>
      <DigimonImage/>
      <a href="#" className="cardName">
        <h1 className="cardName">Name</h1>
      </a>
      <a href="#" className="cardPrice">
        <h4 className="cardName">12.99$</h4>
      </a>
      <p>
        <small>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the internet standard dummy text ever
          since the 1500s.
        </small>
      </p>
    </section>
  </div>
);
export default ProductCard;
