import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model(params) {
    // want to return all the posts from the API and render them - use store
    return this.store.findAll('post');
  },

  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});
