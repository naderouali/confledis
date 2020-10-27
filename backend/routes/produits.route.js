const router = require("express").Router();
let Produit = require("../models/produit.model");


router.get("/", (req, res) => {
  Produit.find()
    .then((produits) => res.json(produits))
    .catch((err) => res.status(400).json("Error: " + err));
});

//ajouter produit
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

//modifuer produit
router.route("/update").post((req, res) => {
  Produit.findById(req.body._id)
    .then((produit) => {
      produit.nom = req.body.nom;
      produit.prix = req.body.prix;
      produit.quantite = req.body.quantite;
      produit
        .save()
        .then(() => res.json("produit mis a jour!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Produit.findById(req.params.id)
    .then((produit) => res.json(produit))
    .catch((err) => res.status(400).json("Error: " + err));
});

//supprimer produit
router.route("/:id").delete((req, res) => {
  Produit.findByIdAndDelete(req.params.id)
    .then(() => res.json("produit supprime!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
