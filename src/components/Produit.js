import React from 'react'

export default function Produit({ produit }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: 4 }}>
            <div style={{ backgroundColor: "#007bff33" }}>{produit.nom}</div>
            <div style={{ backgroundColor: "#007bff33" }}>{produit.prix}</div>
            <div style={{ backgroundColor: "#007bff33" }}>{produit.quantite}</div>
        </div>
    )
}


// // // // .missionTabBody {
// // // //     display: grid;
// // // //     grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
// // // //     grid-column-gap: 4px;
// // // //     margin-bottom: 4px;
// // // //     text-align: center;
// // // //   }