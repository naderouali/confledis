import React, { useEffect, useState } from "react";
import Produit from "./Produit";
import axios from "axios";
import Recherche from "./Recherche";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';


export default function ProduitListe({ setToggle }) {
    const [allProduits, setAllProduits] = useState([]);
    const [produits, setProduits] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const deleteProduit = (id) => {
        axios
            .delete("http://localhost:5000/produits/" + id)
            .then((res) => console.log(res.data));
        setAllProduits(allProduits.filter((el) => el._id !== id));
    }


    // const saveLocalProduits = () => {
    //     localStorage.setItem("produits", JSON.stringify(produits));
    // };
    // const getLocalProduits = () => {
    //     if (localStorage.getItem("produits") === null) {
    //         localStorage.setItem("produits", JSON.stringify([]));
    //     } else {
    //         let localProduits = JSON.parse(localStorage.getItem("produits"));
    //         setProduits(localProduits);
    //     }
    // };

    const modifierProduit = (id) => {
        Ls.set("idProduit", id);
        setToggle(2)
    }

    useEffect(() => {
        const getProduits = () => {
            axios
                .get("http://localhost:5000/produits/")
                .then((response) => { setAllProduits(response.data); })
                .catch((error) => { console.log(error); });
        }
        getProduits();
    }, []);

    return (
        <div>
            <h2 style={{ marginTop: 15 }}>Liste des produits</h2>
            <Recherche
                setIsSearching={setIsSearching}
                allProduits={allProduits}
                setProduits={setProduits}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2fr", gridColumnGap: 4, marginTop: 20, textAlign: "center", color: "white" }}>

                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Nom</div>
                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Prix</div>
                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Quantité</div>
                <div style={{ backgroundColor: "#007bff", padding: 10 }}>Actions</div>
            </div>
            {!isSearching && <div style={{ gridRowGap: 4 }}>
                {allProduits.map((currentProduit) => (
                    <Produit style={{ gridRowGap: 4 }} modifierProduit={modifierProduit} produit={currentProduit} deleteProduit={deleteProduit} key={currentProduit._id} />
                ))}
            </div>}

            {isSearching && <div style={{ gridRowGap: 4 }}>
                {produits.map((currentProduit) => (
                    <Produit style={{ gridRowGap: 4 }} modifierProduit={modifierProduit} produit={currentProduit} deleteProduit={deleteProduit} key={currentProduit._id} />
                ))}
            </div>}
        </div>
    )
}
