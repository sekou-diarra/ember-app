import Ember from 'ember';
var Produit = Ember.Object.extend({
  nomProduit: '',
  fabriquant: '',
  prixProduit: 0,
  descriptionProduit: '',
  enStock: false
});

export default Ember.Controller.extend({});
