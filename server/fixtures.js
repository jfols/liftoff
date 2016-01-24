var criteria, users;

criteria = {
  username: 'testuser'
};

if (Meteor.users.find(criteria).count() === 0) {
  users = [
    {
      username: 'testuser',
      email: 'test@user.com',
      password: 'password'
    }, {
      username: 'testuser2',
      email: 'test@user2.com',
      password: 'password'
    }
  ];
  console.log('FIXTURES: creating test users');
  _.each(users, function(user) {
    return Accounts.createUser(user);
  });
}
