/* global BlazeLayout, FlowRouter */
/* FlowRouter configuration */

var createFlowRoute, renderMainLayoutWithContent, requireLoggedIn, userAccountsRoutes;

userAccountsRoutes = ['atSignIn', 'atSignUp', 'atVerifyEmail', 'atSendAgain', 'atChangePwd', 'atEnrollAccount', 'atForgotPwd', 'atR esetPassword'];

/* Helpers */

renderMainLayoutWithContent = function (content) {
  return function () {
    return BlazeLayout.render('mainLayout', content);
  };
};

createFlowRoute = function (routeName, options = {}, extraContent = {}) {
  var content, path, renderLayoutWithContent, templateName;

  path = options.path || ('/' + routeName);
  templateName = options.templateName || routeName;
  renderLayoutWithContent = options.renderLayoutFunction || renderMainLayoutWithContent;
  content = {
    content: templateName
  };
  _.extend(content, extraContent);

  FlowRouter.route(path, {
    name: routeName,
    action: renderLayoutWithContent(content)
  });
};

/* Routes */

createFlowRoute('home', {
  path: '/'
}, {
  mastheadContent: 'mastheadHome'
});

createFlowRoute('about');
createFlowRoute('autoform', {templateName: 'exampleAutoform'});

requireLoggedIn = function (context, redirect) {
  if (!((Meteor.user() !== null) || Meteor.loggingIn())) {
    return redirect('atSignIn');
  }
};

FlowRouter.triggers.enter([requireLoggedIn], {
  except: _.union(['home'], userAccountsRoutes)
});
