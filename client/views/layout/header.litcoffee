# Header helpers

    Template.header.events
      'click #at-nav-link': (event) ->
        if Meteor.user() then AccountsTemplates.logout()
      'click .logout': (event) ->
        AccountsTemplates.logout()
      'click .nav-mobile-link': (event) ->
        $('.button-collapse').sideNav('hide')

    Template.header.onRendered ->
      $(".button-collapse").sideNav()
