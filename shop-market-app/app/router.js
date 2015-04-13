import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('contact');
  this.route('connection');
  this.resource('produits', function () {
    this.resource('produit', {path: ':_id'});
  });
  this.resource('clients', function () {
    this.resource('client', {path: '/:_id'});
  });
});

export default Router;
