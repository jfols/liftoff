/* Configure Accounts Templates */

var password;

AccountsTemplates.configure({

/* Behavior */

  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: true,

/* Appearance */

  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

/* Client side validation */

  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

/* Router */

  homeRoutePath: '/',
  redirectTimeout: 4000,
  defaultLayout: 'mainLayout',
  defaultLayoutRegions: {
    header: 'header',
    footer: 'footer'
  },
  defaultContentRegion: 'content',

/* Copy */

  texts: {
    navSignIn: 'Sign In',
    navSignOut: 'Logout',
    signUpLink_link: 'Create an account',
    pwdLink_link: 'Forgot password?'
  },

/* Hooks */

  onLogoutHook: function() {
    return FlowRouter.go('/sign-in');
  }
});

/* Validate username */

// Remove email and password fields to add as `username_and_email` login
AccountsTemplates.removeField('email');
// keep `password` to add as is
password = AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
  {
    _id: 'username',
    type: 'text',
    displayName: 'username',
    required: true,
    minLength: 5,
    func: function(value) {
      if (Meteor.isClient) {
        var self = this;
        return Meteor.call('userExists', value, function(error, userExists) {
          try {
            if (userExists) {
              self.setError('username taken');
            } else {
              self.setSuccess();
            }
            self.setValidating(false);
          } catch (error) {
            console.log(error);
          }
        });
      } else {
        return Meteor.call('userExists', value);
      }
    }
  }, {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: 'email',
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email'
  }, {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: 'Login',
    placeholder: 'Email or username'
  },
  password
]);

// Meteor method to check if username exists
if (Meteor.isServer) {
  Meteor.methods({
    userExists: function(username) {
      return !!(Meteor.users.findOne({
        username: username
      }));
    }
  });
}

/* Configure FlowRouter account routes */
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
