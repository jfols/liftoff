Template.menuMain.events({
  'click .logout': function(event) {
    console.log('logout');
    AccountsTemplates.logout();
  }
});
