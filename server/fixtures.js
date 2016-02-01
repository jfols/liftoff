/* global Accounts, lodash */

const _ = lodash;

if (Meteor.users.find().count() === 0) {
  let emailPostfix = '@email.com';
  let usernamePrefix = 'username';
  let userCount = 50;

  console.log('FIXTURES: creating test users');

  _.times(userCount, (index) => Accounts.createUser({
    username: `${ usernamePrefix }${ index }`,
    email: `${ usernamePrefix }${ index }${ emailPostfix }`,
    password: 'password'
  }));
}
