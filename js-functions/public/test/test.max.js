describe("Max value functions", function(){

  describe("max", function(){

    it("should return the largest of two numbers", function(){

      expect(max(2, 3)).to.equal(3);
      expect(max(10, 4)).to.equal(10);
      expect(max(-9, -11)).to.equal(-9);
      expect(max(0, 0)).to.equal(0);

    });

  });

  describe("maxOfThree", function(){

    it("should return the largest of three numbers", function(){

      expect(maxOfThree(1, 2, 3)).to.equal(3);
      expect(maxOfThree(4, 7, -5)).to.equal(7);
      expect(maxOfThree(21, 21, 20)).to.equal(21);
      expect(maxOfThree(-1, -1, -1)).to.equal(-1);

    });

  });
    
});