import React, { useEffect, useState } from 'react';

export default function Recherche({ setProduits, allProduits, setIsSearching }) {

  const [search, setSearch] = useState();

  const onChange = (e) => {

    var temp = e.target.value;

    if (temp == "") {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }

    var produits = []

    for (const key in allProduits) {
      if (allProduits.hasOwnProperty(key)) {
        const element = allProduits[key];

        if (element.nom.includes(temp) || element.prix.includes(temp) || element.quantite.includes(temp)) {
          produits.push(element)
        }
      }
    }

    setProduits(produits)

    setSearch(temp)
  };

  return (
    <div>
      <form className="form-inline">
        <input onChange={onChange} value={search} className="form-control mr-sm-2" type="Search" placeholder="Recherche" aria-label="Search" />
      </form>
    </div>
  )
}
