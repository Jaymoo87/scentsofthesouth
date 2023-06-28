import * as React from 'react';
import { useState, useEffect } from 'react';
import './scss/app.css';

import Hero from './components/Hero';
import Scents from './components/Scents';
import Products from './components/Products';
import About from './components/About';
import NavBar from './components/NavBar';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Scents />
      <Products />
      <About />
    </main>
  );
};

interface AppProps {}

export default App;
