// WITHOUT A SECOND ADAPTER
// import DS from 'ember-data';
//
// // RESTAdapter - type of adapter
// export default DS.RESTAdapter.extend({
//   host: 'https://jsonplaceholder.typicode.com/',
//   // namespace: 'api/v1/etc'
//
//   pathForType() {
//     return 'users';
//   }
// });

import Typicode from './typicode';

// RESTAdapter - type of adapter
export default Typicode.extend({
  pathForType() {
    return 'users';
  }
});
