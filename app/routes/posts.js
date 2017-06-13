import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // want to return all the posts from the API and render them - use store
    return this.store.findAll('post');
  }
});
