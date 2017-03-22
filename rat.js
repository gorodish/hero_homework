var Rat = function(name) {
  this.name = name;
};

Rat.prototype = {
  nibble: function(food) {
    this.poisonous = true;
  }
};


module.exports = Rat;
