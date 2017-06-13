// THE SECOND ADAPTER
import DS from 'ember-data';

// RESTAdapter - type of adapter
export default DS.RESTAdapter.extend({
  host: 'https://jsonplaceholder.typicode.com'
});
