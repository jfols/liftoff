/* global Examples */

Meteor.publish('allExamples', () => Examples.find());
