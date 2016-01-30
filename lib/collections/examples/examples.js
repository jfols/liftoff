/* global Examples: true, ExampleSchema: true, SimpleSchema */

/* Define the Examples schema and collection
   uses `aldeed:simple-schema` and `aldeed:collection2` */

ExampleSchema = new SimpleSchema({

  title: { type: String, max: 100 },

  description: { type: String, max: 500 }

});

Examples = new Mongo.Collection('examples');
Examples.attachSchema(ExampleSchema);

Examples.allow({

  insert (userId = null) {
    return userId !== null;
  },

  update (userId = null, doc, fieldNames, modifier) {
    return userId !== null;
  },

  remove (userId = null, doc, fieldNames, modifier) {
    return userId !== null;
  }

});
