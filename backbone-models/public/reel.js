/*
  The Backbone Model definition for a reel on a slot machine.
*/
var Reel = Backbone.Model.extend({

  /* 
    If "symbols" or "blankRate" aren't passed in through the initialization,
    default
      - the "symbols" property to [ "Cherry", "Plum", "Lemon", "Orange", "Grape", "Melon" ]
      - the "blankRate" property to .5
  */
  defaults: {

  },

  /*
    In the initialization, 
      - set the "spinning" property of this model to false
      - set the "result" property of this model to "" (empty string)

    Additionally add the following listeners on this model:
      - "spin": execute this.spin()
      - "stop": execute this.stopSpinning()
  */
  initialize: function(attributes) {

  },

  /*
    Set the "spinning" property of this model to true.
  */
  spin: function() {

  },

  /*
    Set the "spinning" property of this model to false.

    Set the "result" property of this model to the value returned by this.getResult()

    Trigger the "stopped" event on this model.
  */
  stopSpinning: function() {

  },

  /*
    Returns the value displayed by the reel.

    First, determine if Math.random() < this model's blankRate attribute.
      If it is, return an empty string.

    Otherwise, return a random item from the symbols attribute.
  */
  getResult: function() {

  },

  /*
    If the "spinning" property of this model is true, return false.

    Otherwise, return the "result" property of this model.
  */
  display: function() {

  }

})