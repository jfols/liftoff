Template.header.events({
  'click .logout': function(event) {
    console.log('logout!');
    return AccountsTemplates.logout();
  }
});
