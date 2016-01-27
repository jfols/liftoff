Template.exampleAutoform.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('allExamples');
  });
});

Template.exampleAutoform.helpers({
  examples: function () {
    return Examples.find();
  },
  examplesCount: function () {
    return Examples.find().count();
  }
});
