describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("2 + 3 must be 5", function() {
    var result = add(2,3)  
    expect(result).toBe(5);
  });
});