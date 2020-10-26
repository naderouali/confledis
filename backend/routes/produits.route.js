const router = require("express").Router();
let Produit = require("../models/produit.model");


router.get("/", (req, res) => {
  Produit.find()
    .then((produits) => res.json(produits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async (req, res) => {

  const nomExist = await Produit.findOne({ nom: req.body.nom });
  if (nomExist)
    return res.status(400).send("Ce produit existe déjà");

  const nom = req.body.nom;
  const prix = req.body.prix;
  const quantite = req.body.quantite;

  const newProduit = new Produit({ nom, prix, quantite });

  newProduit
    .save()
    .then(() => res.json({ newProduit: newProduit._id }))
    .catch((err) => res.status(400).json("Error: " + err));
});




module.exports = router;
