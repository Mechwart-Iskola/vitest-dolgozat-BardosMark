describe("factorial", () => {
    it("should return 120 for n = 5", () => {
        expect(factorial(5)).toBe(120);
    });
    it("should return 6 for n = 3", () => {
      expect(factorial(3)).toBe(6);
    });
    it("should return 1 for n = 0", () => {
      expect(factorial(0)).toBe(1);
    });
    it("should throw an error for negative numbers", () => 
        {  expect(() => factorial(-3)).toThrowError(
        "Factorial is not defined for negative numbers"
      );
    });
  });
  
  
  
  describe("findLongestWord", () => {
    it('should return "jumps" for a normal sentence', () => {
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe(
        "jumps"
      );
    });
    it("should return the word itself for a single-word sentence", () => {
      expect(findLongestWord("Hello")).toBe("Hello");
    });
    it("should return an empty string for an empty sentence", () => {
    expect(findLongestWord("")).toBe("");
    });
    it("should handle sentences with extra spaces", () => {
        expect(findLongestWord("A quick test")).toBe("quick");
    });
  });
  
  
  
  
  describe("countVowels", () => {
    it('should return 3 for "Hello World"', () => {
        expect(countVowels("Hello World")).toBe(3);
    });
    it('should return 0 for "bcdfg"', () => {
       expect(countVowels("bcdfg")).toBe(0);
    });
    it('should return 5 for "AeIoU"', () => 
    { 
        expect(countVowels("AeIoU")).toBe(5);
    });
    it("should return 0 for an empty string", () => 
        {
            expect(countVowels("")).toBe(0);
    });
  });
  
  
  describe("isSubset",  () => {
    
    it("should return true if obj1 is a subset of obj2", () => {
      expect(isSubset({ a: 1 }, { a: 1, b: 2 })).toBe(true);});
    it("should return false if obj1 is not a subset of obj2", () => {
       expect(isSubset({ c: 3 }, { a: 1, b: 2 })).toBe(false);
    });
  });
  
  
describe ("findCommonObjects",  () => {
    it("should return the common objects if they exist", () => {
      const arr1 = [
          { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        ];
      const arr2 = [
         { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
       ];
      expect(findCommonObjects(arr1, arr2)).toEqual([{ id: 2, name: "Bob" }]);
    });
    it("should return an empty array if there are no common objects", () => {
      const arr1 = [{ id: 1, name: "Alice" }];
      const arr2 = [{ id: 3, name: "Charlie" }];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
});
    it("should return an empty array if both arrays are empty", () => {
      expect(findCommonObjects([], [])).toEqual([]);
    });
    it("should return an empty array if one of the arrays is empty", () => {
      const arr1 = [{ id: 1, name: "Alice" }];
       expect(findCommonObjects(arr1, [])).toEqual([]);
    });
  });
  
