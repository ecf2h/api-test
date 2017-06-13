import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // payload is the data
    payload = { posts: payload };
    // name payload "posts" so it works with the hbs posts file and the js posts route
    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
