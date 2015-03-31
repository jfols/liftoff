# Global client test helpers

    @ClientIntegrationTestHelpers =
      loginIfLoggedOut: (done) ->
        if not Meteor.userId()?
          console.log 'logging in as testuser'
          Meteor.loginWithPassword 'testuser','password', (error) ->
            expect(error).toBeUndefined()
            expect(Meteor.user()).not.toBeUndefined()
            done()
        else
          done()
      getDummyGame: ->
        players = [
          name: Meteor.user().username
          userId: Meteor.userId()
        ,
          name: 'player2'
          userId: 'xC8Bg3dCofQokrKya'
        ,
          name: 'player2'
          userId: 'ZscuWK2NaJZzxM2Qy'
        ]
        dummyGame =
          createdBy: 'TrsEfALFJacgug3sW'
          createdAt: new Date()
          hasStarted: yes
          hasFinished: no
          players: players
          currentPlayersTurn: 'TrsEfALFJacgug3sW'
          promptId: 'f7z453Jum537vBS2h'
          story: 'This is a story prompt and'

    ((Meteor, Tracker, Router) ->
      isRouterReady = no
      callbacks = [];

      @waitForRouter = (callback) ->
        if isRouterReady
          callback()
        else
          callbacks.push callback

      Router.onAfterAction ->
        if !isRouterReady && this.ready()
          Tracker.afterFlush ->
            isRouterReady = yes
            callbacks.forEach (callback) ->
              callback()
            callbacks = []

      Router.onRerun ->
        isRouterReady = no
        this.next()

      Router.onStop ->
        isRouterReady = no
        if this.next then this.next()
    )(Meteor, Tracker, Router)
