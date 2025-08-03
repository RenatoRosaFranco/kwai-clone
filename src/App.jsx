import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import BottomBar from './components/BottomBar';
import ProductDetails from './components/ProductDetails';
import ProductHeader from './components/ProductHeader';
import ProductHero from './components/ProductHero';
import Reviews from './components/Reviews';
import Shipping from './components/Shipping';
import Store from './components/Store';
import StoreOptions from './components/StoreOptions';

function App() {
  return (
    <div className="kwai-shop-page">
      <ProductHero />
      <ProductHeader />
      <Shipping />
      <Reviews />
      <Store />
      <StoreOptions />
      <ProductDetails />
      <BottomBar />
    </div>
  );
}

export default App;
