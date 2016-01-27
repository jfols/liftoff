Template.menuMain.onRendered(function () {
  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

Template.menuMain.events({
  'click .logout': function(event) {
    console.log('logout');
    AccountsTemplates.logout();
  }
});
