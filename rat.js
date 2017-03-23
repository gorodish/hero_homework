var Rat = function(name) {
  this.name = name;
};

Rat.prototype = {
  nibble: function(food) {
    food.poisonous = true;
  }
};


module.exports = Rat;
