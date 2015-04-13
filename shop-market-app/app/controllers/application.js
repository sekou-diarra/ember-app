import Ember from 'ember';


export default Ember.Controller.extend({
  time: function () {
    "use strict";
    return new Date().toLocaleString();
  }.property(),
  search: ""
});

