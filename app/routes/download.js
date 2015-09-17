import Ember from 'ember';


export default Ember.Route.extend({
    
   model: function(params) {
    return Ember.$.get("wwww.gooogle.com");
  }
});