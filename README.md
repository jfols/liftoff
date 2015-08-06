#Liftoff

Opinionated boilerplate to get your [Meteor](https://meteor.com) project off the ground written in literal coffeescript using Meteor v1.1.0.3.

Liftoff is designed to be a basic starting point for any Meteor project.

Check the demo! [liftoff.meteor.com](http://liftoff.meteor.com)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Quick Start](#quick-start)
  - [Test logs](#test-logs)
- [Included Packages](#included-packages)
- [Recommended Packages](#recommended-packages)
- [Deploy your app](#deploy-your-app)
  - [Meteor Deploy (easy)](#meteor-deploy-easy)
  - [Semi-Manual Deploy (recommended)](#semi-manual-deploy-recommended)
  - [Manual Deploy (experts only)](#manual-deploy-experts-only)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Quick Start

Clone repo

```sh
git clone git@github.com:jfols/liftoff.git YOURPROJECTNAME
```

Get up in that project directory

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

Debug tests
```sh
JASMINE_BROWSER=PhantomJS DEBUG=1 MOCHA_DEBUG=1 JASMINE_DEBUG=1 VELOCITY_DEBUG=1 VELOCITY_DEBUG_MIRROR=1 meteor
```

## Test logs

Logs are located in `.meteor/local/log/`

# Included Packages

- [kadira:flow-router](https://atmospherejs.com/kadira/flow-router) - Routing at its finest
- [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout) - Blaze rendering for Flow Router
- [coffeescript](https://atmospherejs.com/meteor/coffeescript) - Yum
- [materialize:materialize](https://atmospherejs.com/materialize/materialize) - Get Materilized
- [useraccounts:materilize](https://atmospherejs.com/useraccounts/materialize) - Beautiful and simple user account templates
- [zimme:active-route](https://atmospherejs.com/zimme/active-route) - Simple template helpers to determine active routes
- [arillo:flow-router-helpers](https://atmospherejs.com/fortawesome/fontawesome) - Flow Router helpers
- [sanjo:jasmine](https://atmospherejs.com/sanjo/jasmine) - Jasmine tests
- [velocity:html-reporter](https://atmospherejs.com/velocity/html-reporter) - Velocity HTML test reporter
- [velocity:console-reporter](https://atmospherejs.com/velocity/console-reporter) - Velocity console test reporter

# Recommended Packages

- [aldeed:autoform](https://atmospherejs.com/aldeed/autoform) - Magic forms
  - [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema) - Schemas for your collections
  - [aldeed:collection2](https://atmospherejs.com/aldeed/collection2) - Automatically validate your collections
- [percolate:synced-cron](https://atmospherejs.com/percolate/synced-cron) - Cron jobs

# Deploy your app

There are several options to deploy your app.

## Meteor Deploy (easy)

You can use the free `meteor deploy` service (hosted by Meteor) or your can deploy to your own server.

```sh
meteor deploy yourapp.meteor.com
```

Or to your own domain using Meteor deploy by setting the `CNAME` of your domain to `origin.meteor.com`.

## Semi-Manual Deploy (recommended)

We find the use of [Digital Ocean](https://www.digitalocean.com/?refcode=c7c4c94c1222) with [Meteor Up](https://github.com/arunoda/meteor-up/) to be the simplest and most cost effective hosting solution.
For a more robust database experience give [Compose](https://www.compose.io/mongodb/) a try.

## Manual Deploy (experts only)

Check out this hackpad https://hackpad.com/Production-Meteor-Deploy-Ubuntu-14.04-5TRJ2Erlngg
