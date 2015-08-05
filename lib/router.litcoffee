# FlowRouter

## Helpers

    userAccountsRoutes = ['signIn', 'signUp', 'verifyEmail', 'sendAgain', 'changePwd', 'enrollAccount', 'forgotPwd', 'resetPassword']

    renderMainLayoutWithContent = (content) -> -> BlazeLayout.render 'mainLayout', content: content

### Create Flow Route

Creates a basic flow route, a common pattern.
`routeName` is all that is required

    createFlowRoute = (routeName, options={}) ->
      path = options.path or "/#{routeName}"
      templateName = options.templateName or routeName
      renderLayoutWithContent = options.renderLayoutFunction or renderMainLayoutWithContent
      FlowRouter.route path,
        name: routeName
        action: renderLayoutWithContent templateName

## Routes

    createFlowRoute 'home', path: '/'
    createFlowRoute 'about'

## Triggers

### requireLoggedIn

    requireLoggedIn = (context, redirect) ->
      if not (Meteor.user()? or Meteor.loggingIn())
        redirect 'signIn'

    FlowRouter.triggers.enter [requireLoggedIn], except: _.union ['home'], userAccountsRoutes
