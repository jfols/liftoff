# Header helpers

    Template.header.events
      'click #at-nav-link': (event) ->
        if Meteor.user() then AccountsTemplates.logout()
      'click .logout': (event) ->
        AccountsTemplates.logout()
      'click a': (event) ->
        $('.navbar-collapse').collapse 'hide'
