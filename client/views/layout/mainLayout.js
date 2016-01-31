Template.mainLayout.onRendered(function () {
  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function () {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function () {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;
});
