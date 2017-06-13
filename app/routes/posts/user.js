import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  // get all posts for particular user
  model(params) {
    return this.store.query('post', { userId: params.id } );
  },

  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});
