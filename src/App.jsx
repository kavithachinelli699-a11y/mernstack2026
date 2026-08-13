import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Routing from './Routing'

export const store = createContext();

const App = () => {
  const [token, setToken] = useState("");
  return (
    <store.Provider value={[token, setToken]}>
      <Header />
      <Routing />
      <Footer />
    </store.Provider>

    
  
  )
}

export default App