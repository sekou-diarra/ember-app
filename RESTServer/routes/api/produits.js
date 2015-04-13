var mongoose = require('mongoose');
var Produit = require('../../models/produit');
module.exports.getAllProduits = function (req, res) {
    "use strict";
    Produit.find(function (error, produits) {
        if (error) {
            res.send(error);
        }
        res.send({produits: produits});
    });
}