import React, { useState } from 'react';
import ProduitAjout from "./components/ProduitAjout";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProduitListe from './components/ProduitListe';
import ProduitModif from './components/ProduitModif';
import Navbar from './components/Navbar';

export default function App() {

  const [toggle, setToggle] = useState(0);

  return (

    <div style={{ backgroundColor: "#c7c7c7", minHeight: "100vh", width: "100vw" }}>
      <div style={{ fontSize: 40, textAlign: "center" }} >Confledis</div>

      <div style={{ backgroundColor: "white", margin: 40, marginTop: 60, marginLeft: 80, marginRight: 80, borderRadius: 15, padding: 40 }}>
        <Navbar toggle={toggle} setToggle={setToggle} />
        {toggle === 0 && <ProduitListe setToggle={setToggle} />}
        {toggle === 1 && <ProduitAjout setToggle={setToggle} />}
        {toggle === 2 && <ProduitModif setToggle={setToggle} />}
      </div>
    </div>

  );
}

