if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(done){
        HTTP.get('https://meteor.com', function(error, result){
          try {
            console.log(result);
            chai.expect(false).to.equal(true);
            done();
          }
          catch (err) {
            done(err);
          }
        });
      });
    });
  });
}
