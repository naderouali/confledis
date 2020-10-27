import React from 'react';

export default function Produit({ produit, deleteProduit, modifierProduit }) {
    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2fr", gridColumnGap: 4, gridRowGap: 4, marginTop: 4 }}>
                <div style={{ backgroundColor: "#007bff33", padding: 4 }}>{produit.nom}</div>
                <div style={{ backgroundColor: "#007bff33", padding: 4 }}>{produit.prix}</div>
                <div style={{ backgroundColor: "#007bff33", padding: 4 }}>{produit.quantite}</div>
                <div style={{ backgroundColor: "#007bff33", padding: 4, textAlign: "center", display: "grid", gridAutoFlow: "column", gridColumnGap: 4 }}>
                    <button type="button" className="btn btn-secondary" onClick={() => { modifierProduit(produit._id); }} >Modifier</button>
                    {/* <Link to="/produits/update"><button>moudifie</button></Link> */}
                    <button type="button" className="btn btn-danger" onClick={() => { deleteProduit(produit._id); }}>Supprimer</button>
                </div>
            </div>
        </>
    );
}
