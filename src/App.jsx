import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import ProductHero from './components/ProductHero';
import ProductHeader from './components/ProductHeader';
import Shipping from './components/Shipping';
import Reviews from './components/Reviews';
import Store from './components/Store';
import StoreOptions from './components/StoreOptions';
import ProductDetails from './components/ProductDetails';
import BottomBar from './components/BottomBar';

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
