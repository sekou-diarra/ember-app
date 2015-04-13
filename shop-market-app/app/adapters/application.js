//import HalAdapter from "ember-data-hal-9000/adapter";

import DS from "ember-data";

export default DS.RESTAdapter.extend({

  host: 'http://localhost:3000',
  namespace: 'api',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});


