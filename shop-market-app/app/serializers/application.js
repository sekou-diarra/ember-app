//import HalSerializer from "ember-data-hal-9000/serializer";
//import HALSerializer from "ember-data-hal-adapter";
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id'
});
