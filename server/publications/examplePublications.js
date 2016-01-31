/* global Examples */
Meteor.publish('allExamples', function () {
  return Examples.find();
});
