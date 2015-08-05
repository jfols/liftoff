# FlowRouter

## Routes

    FlowRouter.route '/',
      action: ->
        BlazeLayout.render 'mainLayout',
          header: 'header'
          footer: 'footer'
          content: 'home'
      name: 'home'

    FlowRouter.route '/about',
      action: ->
        BlazeLayout.render 'mainLayout',
          header: 'header'
          footer: 'footer'
          content: 'about'
      name: 'about'

## Helpers

    userAccountsRoutes = ['signIn', 'signUp', 'verifyEmail', 'sendAgain', 'changePwd', 'enrollAccount', 'forgotPwd', 'resetPassword']

## Triggers

### requireLoggedIn

    requireLoggedIn = (context, redirect) ->
      if not (Meteor.user()? or Meteor.loggingIn())
        redirect 'signIn'

    FlowRouter.triggers.enter [requireLoggedIn], except: _.union ['home'], userAccountsRoutes
