# Header helpers

    Template.header.events
      'click .logout': (event) ->
        console.log 'logout!'
        AccountsTemplates.logout()
