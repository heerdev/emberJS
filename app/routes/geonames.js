import Ember from 'ember';


export default Ember.Route.extend({
 
   model: function(params) {
    return Ember.$.getJSON("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo");
  }
});