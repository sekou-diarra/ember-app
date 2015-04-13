import DS from 'ember-data';

export default DS.Model.extend({


  nomProduit: DS.attr('string'),
  fabriquant: DS.attr('string'),
  prixProduit: DS.attr('number'),
  descriptionProduit: DS.attr('string'),
  enStock: DS.attr('boolean')


});


