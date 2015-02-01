describe("Multiplication and Exponent functions", function(){
  
  describe("multiply", function(){

    it("should return multiplied values", function(){

      expect(multiply(2, 3)).to.equal(6);
      expect(multiply(10, 4)).to.equal(40);
      expect(multiply(-9, 5)).to.equal(-45);
      expect(multiply(1, 0)).to.equal(0);

    });

  });

  describe("power", function(){

    it("should return the base to the exponent-th power", function(){

      expect(power(5, 2)).to.equal(25);
      expect(power(7, 1)).to.equal(7);
      expect(power(4, 3)).to.equal(64);
      expect(power(3, 4)).to.equal(81);
      
    });

  });

})