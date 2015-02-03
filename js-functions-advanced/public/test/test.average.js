describe("Average", function(){

  it("should have a sum function", function(){

    expect(sum([1, 2, 3, 4])).to.equal(10);
    expect(sum([20, 30, 15, 45])).to.equal(110);
    expect(sum([-5, 0, 5])).to.equal(0);
    expect(sum([])).to.equal(0);

  });

  it("should calculate average", function(){

    expect(average([1, 2, 3, 4])).to.equal(2.5);
    expect(average([10, 8, 12, 6, 14])).to.equal(10);
    expect(average([3, 3, 3, 3, 3, 3, 3])).to.equal(3);

  });

  it("should calculate average for an empty array", function(){

    // This one might be a little tricksy
    expect(average([])).to.equal(0);

  });

});