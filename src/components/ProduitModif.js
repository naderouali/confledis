import React, { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';

export default function ProduitModif({ setToggle }) {

    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
    const [quantite, setQuantite] = useState("");

    const [nomError, setNomError] = useState("");
    const [prixError, setPrixError] = useState("");
    const [quantiteError, setQuantiteError] = useState("");

    const onChangeNom = (e) => {
        if(e.target.value.length > 20 ) {
            setNomError("Le nom est long");
        } else {
          setNomError("");
        }
        setNom(e.target.value);
      };
    const onChangePrix = (e) => {
        if(e.target.value.includes(",")) {
            setPrixError("Utiliser point (.) comme virgule");
        } else if (isNaN(e.target.value)) {
            setPrixError("N'utiliser pas que des chiffres numérique");
        } else {
          setPrixError("");
        }
        setPrix(e.target.value);
      };
    const onChangeQuantite = (e) => {
        if (isNaN(e.target.value)) {
            setQuantiteError("N'utiliser pas que des chiffres numérique");
        } else {
          setQuantiteError("");
        }
        setQuantite(e.target.value);
      };

    useEffect(() => {
        const getProduit = () => {
            var id = Ls.get("idProduit", "");
            if (id === "") return;
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

    // const onSubmit = () => {
    //     const produit = {
    //         _id: Ls.get("idProduit", ""),
    //         nom: nom,
    //         prix: prix,
    //         quantite: quantite,
    //     };
    //     axios
    //         .post("http://localhost:5000/produits/update", produit)
    //         .then((res) => {
    //             console.log(res.data)
    //             setToggle(0)
    //         });
    // };
    const onSubmit = () => {
        if ( nom === "" ){
            setNomError("Le champ nom ne doit pas être vide");
            return;
        } else if ( prix === "" ) {
            setPrixError("Le champ prix ne doit pas être vide");
            return;
        } else if ( quantite === "" ) {
            setQuantiteError("Le champ quantite ne doit pas être vide");
            return;
        } else {
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

            
        }
        
    };

    return (
        <div>
            <h2 style={{ marginTop: 15 }}>Modifier un produit</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: 25, marginBottom: 15 }}>
                <input placeholder="Nom" name="nom" className="form-control" type="text" value={nom} onChange={onChangeNom} />
                {nomError !== "" && <p style={{ color: "red" }}>{nomError}</p>}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: 25, marginBottom: 15 }}>
                <input placeholder="Prix" name="prix" className="form-control" type="text" value={prix} onChange={onChangePrix} />
                {prixError !== "" && <p style={{ color: "red" }}>{prixError}</p>}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: 25, marginBottom: 15 }}>
                <input placeholder="Quantité" name="quantite" className="form-control" type="text" value={quantite} onChange={onChangeQuantite} />
                {quantiteError !== "" && <p style={{ color: "red" }}>{quantiteError}</p>}
            </div>
            
            <button onClick={onSubmit} className="btn btn-primary">Mettre a jour</button>

        </div>
    )
}