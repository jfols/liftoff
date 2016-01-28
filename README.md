# Liftoff

Liftoff is an opinionated boilerplate you can use to [Meteor](https://meteor.com) project off the ground super fast. [Check out the demo.](http://liftoff.meteor.com)

![Nifty gif, eh?](https://raw.githubusercontent.com/jfols/liftoff/master/public/assets/images/liftoff.gif)

# What's inside

- [semantic:ui](https://atmospherejs.com/semantic/ui) - User Interface is the language of the web
- [useraccounts:semantic-ui](https://atmospherejs.com/useraccounts/materialize) - Beautiful and simple user account templates
- [kadira:flow-router](https://atmospherejs.com/kadira/flow-router) - Routing at its finest
- [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout) - Blaze rendering for Flow Router
- [zimme:active-route](https://atmospherejs.com/zimme/active-route) - Template helper to determine active routes
- [arillo:flow-router-helpers](https://atmospherejs.com/fortawesome/fontawesome) - Flow Router helpers
- [aldeed:autoform](https://atmospherejs.com/aldeed/autoform) - Magic forms
- [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema) - Schemas for your collections
- [aldeed:collection2](https://atmospherejs.com/aldeed/collection2) - Automatically validate your collections
- [okgrow:router-autoscroll](https://atmospherejs.com/okgrow/router-autoscroll) - Fixes scrolling position while routing

# Try it

Download the project and unzip.

https://github.com/jfols/liftoff/archive/master.zip

Rename the directory to your project name.

In your terminal, navigate to the project directory.

```sh
cd YOURPROJECTNAME
```

If you *don't* have Meteor install, install it

```sh
curl https://install.meteor.com | /bin/sh
```

Fire up the engines

```sh
meteor
```

# Deploy your app

There are several options to deploy your app.

## Meteor Deploy

Free `meteor deploy` hosted by Meteor.

```sh
meteor deploy yourapp.meteor.com
```

Or to your own domain using Meteor deploy by setting the `CNAME` of your domain to `origin.meteor.com`.

```sh
meteor deploy yourdomain.com
```

## Meteor Up (recommended)

We find the use of [Digital Ocean](https://www.digitalocean.com/?refcode=c7c4c94c1222) with [Meteor Up](https://github.com/arunoda/meteor-up/) to be the simplest and most cost effective hosting solution.
For a more robust database experience give [Compose](https://www.compose.io/mongodb/) a try.

## Custom Deploy

Check out this hackpad https://hackpad.com/Production-Meteor-Deploy-Ubuntu-14.04-5TRJ2Erlngg
