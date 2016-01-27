Template.header.events({
  'click .logout': function(event) {
    AccountsTemplates.logout();
  },
  'click .sidebar': function(event, template) {
    $('.ui.sidebar').sidebar('hide');
  }
});
