var express = require('express');
var router = express.Router();

var produits = require('./api/produits');

router.route('/produits')
    .get(function (req, res) {
        produits.getAllProduits(req, res);
    });
module.exports = router;