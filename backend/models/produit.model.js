const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const produitSchema = new Schema(
  {
    nom: {
      type: String,
      unique: true,
      trim: true,
    },
    prix: {
      type: Number,
    },
    quantite: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Produit = mongoose.model("Produit", produitSchema);

module.exports = Produit;
