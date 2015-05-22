# Iron-router configuration

    Router.configure
      layoutTemplate: 'layout'
      loadingTemplate: 'loading'

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
