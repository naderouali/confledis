import React, { useEffect, useState } from "react";
import Produit from "./Produit";
import axios from "axios";

export default function ProduitListe() {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const getProduits = () => {
          axios
          .get("http://localhost:5000/produits/")
          .then((response) => { setProduits(response.data); })
          .catch((error) => { console.log(error); });
        }
        getProduits();
      }, []);

    return (
        <div>
            <h2 style={{ marginTop: 15 }}>Liste des produits</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: 4, marginTop: 20, textAlign: "center", color: "white" }}>
                
                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Nom</div>
                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Prix</div>
                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Quantité</div>
            </div>
            <div style={{ gridRowGap: 4}}>
                {produits.map((currentProduit) => (
                    <Produit style={{ gridRowGap: 4 }} produit={currentProduit} /*deleteMission={deleteMission}*/ key={currentProduit._id} />
                ))}
            </div>
        </div>
    )
}
