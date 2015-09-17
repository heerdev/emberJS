import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
    LOG_TRANSITIONS:true
});

App.BaseModel = Ember.Mixin.create({
  base: 'http://maps.google.com/?q=',
  fullAddress: function(){
    return this.get('base') + this.get('countrycode');
  }.property('countrycode')
});


loadInitializers(App, config.modulePrefix);

export default App;
