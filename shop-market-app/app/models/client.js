import DS from 'ember-data';


export default DS.Model.extend({

  "nom": DS.attr('string'),
  "prenom": DS.attr('string'),
  "dateNaissance": DS.attr('string'),
  "avatar": DS.attr('string'),
  "email": DS.attr('string'),
  "telephone": DS.attr('string'),

  age: function () {
    "use strict";
    var dateJour = moment();
    var dateNais = moment(this.dateNaissance, "DD-MMM-YYYY");
    return dateJour.diff(dateNais);
  }.property()

});
