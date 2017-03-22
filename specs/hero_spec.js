var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');

describe("Hero", function() {
  beforeEach(function() {
    gary = new Hero('Gary', 'potatoes');
    ratus = new Rat('Ratus Norvegicus');
    cheese = new Food('cheese', false);
    potatoes = new Food('potatoes', false);
  });
  it('can get name', function() {
    assert.equal('Gary', gary.name);
  });
  it('can get health', function() {
    assert.equal(10, gary.health);
  });
  it('can get fave food', function() {
    assert.equal('potatoes', gary.faveFood);
  });
  it('can talk', function() {
    assert.equal('My name is Gary', gary.talk());
  });
  it('health goes up when eats', function() {
    gary.eat(cheese);
    assert.equal(20, gary.health);
  });
  it('health goes up when eats fave food', function() {
    gary.eat(potatoes);
    assert.equal(25, gary.health);
  });
  it('can get rat name', function() {
    assert.equal('Ratus Norvegicus', ratus.name);
  });
  it('food is poisonous', function() {
    ratus.nibble('cheese');
    assert.equal(true, cheese.poisonous);
  });
});