Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map( function () {
  
  this.route('home', {
    path: '/'
  });
  
  this.route('about', {
    path: 'about'
  });
  
  this.route('cats', {
    waitOn: function () { return Meteor.subscribe('cats'); },
    data: function () { 
      return { cats: Cats.find() };
    }
  });
  
});