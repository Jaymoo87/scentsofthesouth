import * as React from 'react';
import { useState, useEffect } from 'react';
import './scss/app.css';

import Hero from './components/Hero';
import Scents from './components/Scents';
import Products from './components/Products';
import About from './components/About';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleToggle = () => {
    if (isDark) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <main>
      <Hero />
      <Scents />
      <Products />
      <About />
    </main>
  );
};

interface AppProps {}

export default App;
