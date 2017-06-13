import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model() {
    // want to return all the posts from the API and render them - use store
    return this.store.findRecord('post', params.id);
  },

  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});
