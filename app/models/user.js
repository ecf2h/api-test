import DS from 'ember-data';
import Model from 'ember-data/model';

const {
  attr,
  hasMany
} = DS;

export default DS.Model.extend({
  post: hasMany('post'),

  // id is a default, UNIQUE
  name: attr('string'),
  username: attr('string'),
  email: attr('string'),
  website: attr('string'),
  phone: attr('string')
});
