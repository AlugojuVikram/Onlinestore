import { useState } from 'react';
import './App.css';
import { Products } from './components/Products';
import { Favourite } from './components/Favourite';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Cart } from './components/Cart';

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/favourite" element={<Favourite/>}/>
          <Route path='/cart' element={<Cart/>} />
       </Routes>
    </div>
  );
}

export default App;
