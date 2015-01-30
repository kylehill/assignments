var _BLANK_ = "you should fill in the answer here";

describe("Assignment 05 - Fill in the _BLANK_s!", function(){
  
  describe("Numbers", function(){

    it("Addition", function(){
      expect(2 + 3).to.equal(_BLANK_);
      expect(1.5 + 7.25).to.equal(_BLANK_);
      expect(100 + -50).to.equal(_BLANK_);
    });

    it("Subtraction", function(){
      expect(6 - 4).to.equal(_BLANK_);
      expect(4 - 6).to.equal(_BLANK_);
      expect(9 - 3.7).to.equal(_BLANK_);
    });

    it("Multiplication", function(){
      expect(3 * 5).to.equal(_BLANK_);
      expect(2 * -3).to.equal(_BLANK_);
      expect(3.2 * 2).to.equal(_BLANK_);
    });

    it("Division", function(){
      expect(16 / 4).to.equal(_BLANK_);
      expect(7 / 2).to.equal(_BLANK_);
      expect(5.5 / 1.1).to.equal(_BLANK_);
    });

    it("Modulus", function(){
      expect(5 % 2).to.equal(_BLANK_);
      expect(6 % 3).to.equal(_BLANK_);
      expect(27 % 5).to.equal(_BLANK_);
    });

  });

  describe("Strings", function(){

    it("Length", function(){

      expect("hello".length).to.equal(_BLANK_);
      expect(("hello, " + "world").length).to.equal(_BLANK_);

      var sampleString = "test";
      expect(sampleString.length).to.equal(_BLANK_);

    });

    it("Concatenation", function(){
      expect("hello, " + "world").to.equal(_BLANK_);
      expect("a" + "b" + "c").to.equal(_BLANK_);

      var sampleString = "test";
      expect(sampleString + ", " + sampleString + ", 1, 2, 3").to.equal(_BLANK_);
    });

    it("Trim Whitespace", function(){
      expect(" string stuff ".trim()).to.equal(_BLANK_);
      expect("    ".trim()).to.equal(_BLANK_);

      var sampleString = " x y z";
      expect(sampleString.trim()).to.equal(_BLANK_);
    });

    it("Substring Searching", function(){
      // Note: "string".substring does something a little different.
      // Let's standardize "string".substr during this class.

      expect("hello, world!".substr(2)).to.equal(_BLANK_);
      expect("hello, world!".substr(2, 1)).to.equal(_BLANK_);
      expect("hello, world!".substr(7, 3)).to.equal(_BLANK_);
    });

  });

  describe("Boolean", function(){

    it("Okay, there really isn't much else to do with booleans", function(){

      expect(true).to.equal(_BLANK_);
      expect(false).to.equal(_BLANK_);

    });

  });

  describe("Operators", function(){

    it("Strict Equality", function(){

      expect(5 === 5).to.equal(_BLANK_);
      expect(5 === 3).to.equal(_BLANK_);
      expect(5 === "5").to.equal(_BLANK_);

    });

    it("Loose Equality", function(){

      expect(5 == 5).to.equal(_BLANK_);
      expect(5 == 3).to.equal(_BLANK_);
      expect(5 == "5").to.equal(_BLANK_);

    });

    it("Comparison", function(){

      expect(5 > 5).to.equal(_BLANK_);
      expect(5 >= 5).to.equal(_BLANK_);
      expect(5 > 3).to.equal(_BLANK_);
      expect(5 < 3).to.equal(_BLANK_);

    });

    it("Non-Equality", function(){

      expect(!(5 > 3)).to.equal(_BLANK_);
      expect(!!(5 > 3)).to.equal(_BLANK_);
      expect(5 !== "5").to.equal(_BLANK_);
      expect(5 != "5").to.equal(_BLANK_);

    });

  });

  describe("Control Flow", function(){

    it("If", function(){

      var result = "nope";
      var sampleString = "hello";

      if (sampleString.length > 3) {
        result = "yep";
      }

      expect(result).to.equal(_BLANK_);

      result = 1;

      if (sampleString.substr(1, 1) === "e") {
        result = 2;

        if (sampleString.length === 6) {
          result = 3;
        }
      }

      expect(result).to.equal(_BLANK_);

    });

    it("If/Else", function(){

      var result;
      var sampleString = "hello";

      if (sampleString == "goodbye") {
        result = 1;
      }
      else {
        result = 2;
      }

      expect(result).to.equal(_BLANK_);

      result = "";

      if (sampleString.substr(2, 1) === "l") {

        if (sampleString.length === 5) {
          result = 10;
        }
        else {
          result = 20;
        }

      }
      else {

        if (sampleString.length === 5) {
          result = 30;
        }
        else {
          result = 40;
        }

      }

      expect(result).to.equal(_BLANK_);

    });

    it("For Loops", function(){

      var count = 0;

      for (var i = 0; i < 5; i++) {
        count = count + 2;

        expect(i).to.be.lessThan(_BLANK_);
      }

      expect(i).to.equal(_BLANK_);
      expect(count).to.equal(_BLANK_);

    });

    it("While Loops", function(){

      var count = 0;
      var left = 10;

      while (left > 0) {
        count = count + 2;

        expect(left).to.be.greaterThan(_BLANK_);
      }

      expect(left).to.equal(_BLANK_);
      expect(count).to.equal(_BLANK_);

    });

  });

});