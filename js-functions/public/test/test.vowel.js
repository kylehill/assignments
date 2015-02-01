describe("Vowel functions", function(){
  
  describe("isVowel", function(){

    it("should return multiplied values", function(){

      expect(isVowel("a")).to.equal(true);
      expect(isVowel("d")).to.equal(false);
      expect(isVowel("y")).to.equal(false);

      // It should be okay with capitalized letters
      expect(isVowel("E")).to.equal(true);
      expect(isVowel("Q")).to.equal(false);
      
      // And always be wary of messed up input...
      expect(isVowel(" ")).to.equal(false);
      expect(isVowel("")).to.equal(false);

    });

  });

  describe("countVowels", function(){

    it("should return vowel counts", function(){

      expect(countVowels("Hello, World")).to.equal(3);
      expect(countVowels("The Iron Yard")).to.equal(4);
      expect(countVowels("JavaScript Is Great")).to.equal(6);

    });

  });

})