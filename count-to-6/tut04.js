// => functions bind this correctly

var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    setImmediate(() => console.log(this.yelp));
  }
};

foot.kick();