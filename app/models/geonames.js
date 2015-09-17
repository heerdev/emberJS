import DS from 'ember-data';



export default  DS.Model.extend(App.BaseModel,{
    countrycode: DS.attr('string')
 
});