/* global AccountsTemplates */

Template.menuMain.onRendered(() => {
  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

Template.menuMain.events({

  'click .logout' (event) {
    console.log('logout');
    AccountsTemplates.logout();
  }

});
