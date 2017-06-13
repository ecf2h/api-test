import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // payload is the data
    payload = { users: payload };
    // name payload "posts" so it works with the hbs posts file and the js posts route

    // want to rename the key "userId" to "user"
    // => is es6 syntax, binds so you don't lose current scope
    // doesn't work
    // payload.posts.forEach((post) => {
    //   post.user = post.userId;
    //   delete post.userId;
    // })

    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
