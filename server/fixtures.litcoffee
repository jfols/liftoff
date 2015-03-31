# user fixtures

    criteria = username: 'testuser'
    if Meteor.users.find(criteria).count() is 0
      users = [
        username: 'testuser'
        email: 'test@user.com'
        password: 'password'
      ,
        username: 'testuser2'
        email: 'test@user2.com'
        password: 'password'
      ]
      console.log 'creating test users'
      _.each users, (user) ->
        Accounts.createUser user
