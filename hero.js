var Hero = function(name, faveFood) {
  this.name = name;
  this.faveFood = faveFood;
  this.health = 10;
};

Hero.prototype = {
  talk: function(name){
    return "My name is " + this.name;
  },
  eat: function(food){
      if(food.name == this.faveFood){
        this.health += (1.5 * food.replenishment);
      }else{
        this.health += food.replenishment;
      }
  }
};


module.exports = Hero;