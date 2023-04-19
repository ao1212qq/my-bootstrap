import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Favorites from './components/Favorites';
import "./App.css";

function App() {

  const [clothes, setClothes] = useState([])

  useEffect(() => {
async function axiosData() {
  const clothesData = await axios.get('https://64400cb1b9e6d064be06733a.mockapi.io/clothes')
  setClothes(clothesData.data)
}

  axiosData();
  },[])
  
  return (
    <div>

      <Router>
      <Header/>
      <Routes>
        <Route path='/favorites'
        element={
            <Favorites/>
        }
           />
           <Route path='/'
        element={
          <Home
          item={clothes}
          />
        }
           />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
