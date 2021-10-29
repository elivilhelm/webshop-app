import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import '../styles/style.css'
import '../styles/footer.css';
import '../styles/globals.css';
import '../styles/header.css';

export default function Home(digimon) {
  return (
    <div>
      <Header />

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
