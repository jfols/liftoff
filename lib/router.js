/* global BlazeLayout, FlowRouter, lodash */

const _ = lodash;

/* FlowRouter configuration */
let userAccountsRoutes = [
  'atSignIn',
  'atSignUp',
  'atVerifyEmail',
  'atSendAgain',
  'atChangePwd',
  'atEnrollAccount',
  'atForgotPwd',
  'atResetPassword'
];

/* Routes */

createFlowRoute('home', { path: '/' }, { mastheadContent: 'mastheadHome' });

createFlowRoute('about');
createFlowRoute('autoform', { templateName: 'exampleAutoform' });

FlowRouter.triggers.enter([ requireLoggedIn ], {
  except: _.union([ 'home' ], userAccountsRoutes)
});

/* Helpers */

function requireLoggedIn (context, redirect) {
  if (!((Meteor.user() !== null) || Meteor.loggingIn())) {
    return redirect('atSignIn');
  }
}

function renderMainLayoutWithContent (content) {
  return () => BlazeLayout.render('mainLayout', content);
}

function createFlowRoute (routeName, options = {}, extraContent = {}) {
  let path = options.path || ('/' + routeName);
  let templateName = options.templateName || routeName;
  let renderLayoutWithContent = options.renderLayoutFunction || renderMainLayoutWithContent;
  let content = { content: templateName };
  _.extend(content, extraContent);

  FlowRouter.route(path, {
    name: routeName,
    action: renderLayoutWithContent(content)
  });
}
