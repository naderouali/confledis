import React from 'react'

export default function Navbar( {toggle, setToggle} ) {
    return (
        <div>
            <button onClick={() => {setToggle(0) }} type="button" className="btn btn-primary" style={{ marginRight: 10 }}>Liste des produits</button>
            <button onClick={() => {setToggle(1) }} type="button" className="btn btn-primary">Ajouter un produit</button>
        </div>
    )
}
