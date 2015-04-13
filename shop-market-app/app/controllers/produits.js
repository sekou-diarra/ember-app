import Ember from 'ember';



export default Ember.ArrayController.extend({

  itemController: 'produit',
  sortProperties: ['prixProduit'],
  sortAscending: false,
  nombreDeProduit: function () {
    "use strict";
    return this.get('length');
  }.property()


});
