import React, { useState } from "react";
import axios from "axios";

export default function ProduitAjout() {

    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
    const [quantite, setQuantite] = useState("");

    const onSubmit = () => {
        const produit = {
            nom: nom,
            prix: prix,
            quantite: quantite,
        };
        axios
            .post("http://localhost:5000/produits/add", produit)
            .then((res) => console.log(res.data));
    };

    return (
        <div>
            <h2 style={{ marginTop: 15 }}>Créer un nouveau produit</h2>

            <input placeholder="Nom" name="nom" className="form-control" type="text" value={nom} onChange={(e) => { setNom(e.target.value); }} />
            <input placeholder="Prix" name="prix" className="form-control" type="text" value={prix} onChange={(e) => { setPrix(e.target.value); }} />
            <input placeholder="Quantité" name="quantite" className="form-control" type="text" value={quantite} onChange={(e) => { setQuantite(e.target.value); }} />
            <button onClick={onSubmit} className="btn btn-primary">Ajouter</button>

        </div>
    )
}

