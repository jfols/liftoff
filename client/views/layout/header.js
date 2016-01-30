/* global AccountsTemplates */

Template.header.events({

  'click .logout' (event) {
    AccountsTemplates.logout();
  },

  'click .sidebar' (event, template) {
    $('.ui.sidebar').sidebar('hide');
  }

});
