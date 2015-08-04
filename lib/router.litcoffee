# FlowRouter Definitions

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

## Filters

filters =
  isLoggedIn: ->
    if not (Meteor.loggingIn() or Meteor.user())
      this.render 'fullPageAtForm'
      Router.go 'atSignIn'
    else
      this.next()

Login filter, except public routes

Router.onBeforeAction filters.isLoggedIn,
  except: [
    'home'
    'about'
    'atSignIn'
    'atSignUp'
    'atForgotPwd'
    'atResetPwd'
    'atVerifyEmail'
    'atEnrollAccount'
    'atChangePwd'
  ]
