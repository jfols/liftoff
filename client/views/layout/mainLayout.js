/* global Template, $ */

Template.mainLayout.onRendered(() => {
  // fix menu when passed
  $('.masthead').visibility({

    once: false,

    onBottomPassed () {
      $('.fixed.menu').transition('fade in');
    },

    onBottomPassedReverse () {
      $('.fixed.menu').transition('fade out');
    }

  });
});
