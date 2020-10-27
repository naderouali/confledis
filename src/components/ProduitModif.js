import React, { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';

export default function ProduitModif({ setToggle }) {

    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
    const [quantite, setQuantite] = useState("");



    useEffect(() => {
        const getProduit = () => {
            var id = Ls.get("idProduit", "");
            if (id == "") return;
            axios
                .get("http://localhost:5000/produits/" + id)
                .then((response) => {
                    setNom(response.data.nom);
                    setPrix(response.data.prix);
                    setQuantite(response.data.quantite);

                })
                .catch((error) => { console.log(error); });
        }
        getProduit();
    }, []);

    const onSubmit = () => {
        const produit = {
            _id: Ls.get("idProduit", ""),
            nom: nom,
            prix: prix,
            quantite: quantite,
        };
        axios
            .post("http://localhost:5000/produits/update", produit)
            .then((res) => {
                console.log(res.data)
                setToggle(0)
            });
    };

    return (
        <div>
            <h2 style={{ marginTop: 15 }}>Modifier un produit</h2>

            <input placeholder="Nom" name="nom" className="form-control" type="text" value={nom} onChange={(e) => { setNom(e.target.value); }} />
            <input placeholder="Prix" name="prix" className="form-control" type="text" value={prix} onChange={(e) => { setPrix(e.target.value); }} />
            <input placeholder="Quantité" name="quantite" className="form-control" type="text" value={quantite} onChange={(e) => { setQuantite(e.target.value); }} />
            <button onClick={onSubmit} className="btn btn-primary">Mettre a jour</button>

        </div>
    )
}