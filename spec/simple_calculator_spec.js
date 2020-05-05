const { add, multiply } = require ("/mnt/c/Users/Nandi Khumalo/hello/my_jasmine_goodies/src/simple_calculator.js")

describe("adding numbers", function() {
    it("should add two numbers", function() {
        expect(add(1, 4)).toBe(5);
    })
    it('should add alot of numbers', function(){
        expect(add(1, 2, 3, 4)).toBe(10);
    })
})

describe("multipling numbers", function() {
    it("should multiply two numbers", function() {
        expect(multiply(1, 4)).toBe(4);
    })
    it('should multiply alot of numbers', function(){
        expect(multiply(1, 2, 3, 4)).toBe(24);
    })
})