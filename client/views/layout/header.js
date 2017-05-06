/* global AccountsTemplates */
Template.header.events({

  'click .logout' (event) {
    AccountsTemplates.logout();
  },

});
