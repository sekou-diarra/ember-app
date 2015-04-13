import Ember from 'ember';


export default Ember.Route.extend({
  model: function (param) {
    "use strict";

    return this.store.findBy('_id', param._id);
  }

});
