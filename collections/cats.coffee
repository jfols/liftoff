@Cats = new Meteor.Collection 'cats',
  schema: new SimpleSchema
    name:
      type: String
    age:
      type: Number
    color:
      type: String
      
Cats.allow
  insert: (userId, doc) -> true
  update: (userId, doc, fieldNames, modifier) -> true
  remove: (userId, doc) -> true