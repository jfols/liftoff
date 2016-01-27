/* Define the Examples schema and collection
   uses `aldeed:simple-schema` and `aldeed:collection2` */

ExampleSchema = new SimpleSchema({
  title: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 500
  }
});

Examples = new Mongo.Collection('examples');
Examples.attachSchema(ExampleSchema);

Examples.allow({
  insert: function (userId) {
    return typeof userId !== "undefined" && userId !== null;
  },
  update: function (userId, doc, fieldNames, modifier) {
    return typeof userId !== "undefined" && userId !== null;
  },
  remove: function (userId, doc, fieldNames, modifier) {
    return typeof userId !== "undefined" && userId !== null;
  }
});
