Meteor.publish('cats', function () {
  return Cats.find({});
});