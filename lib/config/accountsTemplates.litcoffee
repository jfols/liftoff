# Configure Accounts Template

    AccountsTemplates.configure
      confirmPassword: yes
      enablePasswordChange: yes
      forbidClientAccountCreation: no
      overrideLoginErrors: yes
      sendVerificationEmail: no
      lowercaseUsername: yes

      showAddRemoveServices: no
      showForgotPasswordLink: yes
      showLabels: yes
      showPlaceholders: yes

      continuousValidation: no
      negativeFeedback: no
      negativeValidation: yes
      positiveValidation: yes
      positiveFeedback: yes
      showValidating: yes

      homeRoutePath: '/'
      redirectTimeout: 4000

      texts:
        navSignIn: 'Sign In'
        navSignOut: 'Logout'
        button:
          signUp: 'Register'
        title:
          forgotPwd: 'Recover Your Password'

    AccountsTemplates.removeField 'email'
    password = AccountsTemplates.removeField 'password'
    AccountsTemplates.addFields [
      _id: 'username'
      type: 'text'
      displayName: 'username'
      required: yes
      minLength: 5
      func: (value) ->
        if Meteor.isClient
          console.log 'validating username'
          self = this
          Meteor.call 'userExists', value, (error, userExists) ->
            try
              if userExists
                self.setError 'username taken'
              else
                self.setSuccess()
              self.setValidating no
            catch e
              console.log e
        else
          Meteor.call 'userExists', value
    ,
      _id: 'email'
      type: 'email'
      required: yes
      displayName: 'email'
      re: /.+@(.+){2,}\.(.+){2,}/
      errStr: 'Invalid email'
    ,
      _id: 'username_and_email'
      type: 'text'
      required: yes
      displayName: 'Login'
      placeholder: 'Email or username'
    ,
      password
    ]

    if Meteor.isServer
      Meteor.methods
        userExists: (username) ->
          !!(Meteor.users.findOne username: username)

## Routes

    AccountsTemplates.configureRoute 'changePwd'
    AccountsTemplates.configureRoute 'enrollAccount'
    AccountsTemplates.configureRoute 'forgotPwd'
    AccountsTemplates.configureRoute 'resetPwd'
    AccountsTemplates.configureRoute 'signIn'
    AccountsTemplates.configureRoute 'signUp'
    AccountsTemplates.configureRoute 'verifyEmail'
    AccountsTemplates.configureRoute 'ensureSignedIn'
