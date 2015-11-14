import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasklist');
  this.route('createtask');
  this.route('mytask');
  this.route('notification');
  this.route('about');
  this.route('contact');
  this.route('dashboard');
});

export default Router;
