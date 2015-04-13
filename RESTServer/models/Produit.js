var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProduitSchema = new Schema({

    nomProduit: String,
    fabriquant: String,
    prixProduit: Number,
    descriptionProduit: String,
    enStock: Boolean

})

module.exports = mongoose.model('Produit', ProduitSchema, 'produits');