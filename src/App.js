
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/routes/Home';
import Login from './components/routes/Login';
import ProductDetail from './components/routes/ProductDetail';
import Purchases from './components/routes/Purchases';
import Header from './components/shared/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />

        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>

    </div>
  );
}

export default App;

/*
https://dashing-puppy-89779d.netlify.app/#/purchases
* */