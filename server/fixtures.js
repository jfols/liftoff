/* global Accounts, lodash */

const _ = lodash;

if (Meteor.users.find().count() === 0) {
  let emailPostfix = '@email.com';
  let usernamePrefix = 'username';
  let userCount = 50;

  console.log('FIXTURES: creating test users');

  _.chain(userCount)
    .times((n) => ({
      username: `${ usernamePrefix }${ n }`,
      email: `${ usernamePrefix }${ n }${ emailPostfix }`,
      password: 'password'
    }))
    .each((user) => Accounts.createUser(user));
}
