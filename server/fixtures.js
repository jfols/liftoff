var _ = lodash;

var users, emailPostfix, usernamePrefix, userCount;

if (Meteor.users.find().count() === 0) {
  emailPostfix = '@email.com';
  usernamePrefix = 'username';
  userCount = 50;

  console.log('FIXTURES: creating test users');

  users = [];
  _(userCount).times(function (n) {
    users.push({
      username: `${usernamePrefix}${n}`,
      email: `${usernamePrefix}${n}${emailPostfix}`,
      password: 'password'
    });
  });

  _.each(users, function (user) {
    return Accounts.createUser(user);
  });
}
