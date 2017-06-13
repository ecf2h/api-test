import DS from 'ember-data';
import Model from 'ember-data/model';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  // id is a default
  userId: belongsTo('user'),
  // ember will call the user when the post is called
  title: attr('string'),
  body: attr('string')
});
