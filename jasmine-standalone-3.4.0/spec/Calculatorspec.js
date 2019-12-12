let calculator_instance = require('../src/Calculator');

describe("A Calcualtor function", function() {

    it("Should be able to add numbers", function() {
      expect(calculator_instance.add(5, 3)).toBe(8);
    });
    
    it("Should be able to allocate a slot", function() {
      expect(calculator_instance.set_slot(1)).toBe(8);
    });

    it("Should be able to get allocated slot", function() {
      expect(calculator_instance.get_slot(1)).toBe(8);
    });

    it("Should be able to store memory of last calculation", function() {
      expect(calculator_instance.last()).toBe(8);
    });

    it("Should be able to add a number with last calculation result", function() {
      expect(calculator_instance.add("LAST", 3)).toBe(11);
    });

    it("Should be able to add more than two numbers ", function() {
      expect(calculator_instance.add(5, 3, 2)).toBe(10);
    });

    it("Should be able to allocate a slot", function() {
      expect(calculator_instance.set_slot(2)).toBe(10);
    });

    it("Should be able to store memory of last calculation", function() {
      expect(calculator_instance.last()).toBe(10);
    });

    it("Should be able to multiply two numbers", function() {
      expect(calculator_instance.multiply(30, 2)).toBe(60);
    });

    it("Should be able to add number with last calculated Answer result", function() {
      expect(calculator_instance.multiply("LAST", 2)).toBe(120);
    });

    it("Should be able to multiply multiple numbers", function() {
      expect(calculator_instance.multiply(30, 2, 5)).toBe(300);
    });

    it("Should return 300", function() {
      expect(calculator_instance.last()).toBe(300);
    });

    it("Should be able to get allocated slot", function() {
      expect(calculator_instance.get_slot(1)).toBe(8);
    });

    it("Should be able to get allocated slot", function() {
      expect(calculator_instance.get_slot(2)).toBe(10);
    });

    it("Should handle 'SLOT_1' as allocated slot 1", function() {
      expect(calculator_instance.add("SLOT_1", 10)).toBe(18);
    });
    
    it("Should handle 'SLOT_2' as allocated slot 2", function() {
      expect(calculator_instance.add("SLOT_2", 3)).toBe(13);
    });
   
  });