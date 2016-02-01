/* global Examples */

Template.exampleAutoform.onCreated(function () {
  this.autorun(() => this.subscribe('allExamples'));
});

Template.exampleAutoform.helpers({

  examples () { return Examples.find(); },

  examplesCount () { return Examples.find().count(); }

});
