import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api.geonames.org/citiesJSON'
});