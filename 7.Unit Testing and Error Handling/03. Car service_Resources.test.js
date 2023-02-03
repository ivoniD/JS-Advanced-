
const { carService } = require('./03. Car service_Resources');
const { expect } = require('chai');

describe("carService", function () {

  describe("isItExpensive", function () {

    it("happy path", function () {
      expect(carService.isItExpensive('Engine')).to.be.eq(`The issue with the car is more severe and it will cost more money`);
      expect(carService.isItExpensive('Transmission')).to.be.eq(`The issue with the car is more severe and it will cost more money`);
      expect(carService.isItExpensive('T')).to.be.eq(`The overall price will be a bit cheaper`);
      expect(carService.isItExpensive('111')).to.be.eq(`The overall price will be a bit cheaper`);
    });

  });

  describe("discount", function () {

    it("Invalid input", function () {
      expect(() => { carService.discount('1', 1) }).throw('Invalid input');
      expect(() => { carService.discount([], 1) }).throw('Invalid input');
      expect(() => { carService.discount({}, 1) }).throw('Invalid input');
      expect(() => { carService.discount(undefined, 1) }).throw('Invalid input');
      expect(() => { carService.discount('1', '1') }).throw('Invalid input');
      expect(() => { carService.discount(1, '1') }).throw('Invalid input');
      expect(() => { carService.discount(1, []) }).throw('Invalid input');
      expect(() => { carService.discount(1, {}) }).throw('Invalid input');
      expect(() => { carService.discount(1, undefined) }).throw('Invalid input');
      expect(() => { carService.discount(1) }).throw('Invalid input');
      //expect(() => { carService.discount(0, 1) }).throw('Invalid input');  
    });

    it("Num parts smaller than 2 - cannot apply a discount", function () {
      expect(carService.discount(1, 3)).to.be.eq(`You cannot apply a discount`);
      expect(carService.discount(2, 3)).to.be.eq(`You cannot apply a discount`);
    });

    it("15% discount", function () {
      expect(carService.discount(3, 100)).to.be.eq(`Discount applied! You saved 15$`);
      expect(carService.discount(4, 100)).to.be.eq(`Discount applied! You saved 15$`);
      expect(carService.discount(7, 100)).to.be.eq(`Discount applied! You saved 15$`);
      // expect(carService.discount(2, 100)).to.be.eq(`Discount applied! You saved 100$`);
    });

    it("30% discount", function () {
      expect(carService.discount(8, 100)).to.be.eq(`Discount applied! You saved 30$`);
      expect(carService.discount(20, 100)).to.be.eq(`Discount applied! You saved 30$`);
      expect(carService.discount(100, 100)).to.be.eq(`Discount applied! You saved 30$`); 
    });


  });

  describe("partsToBuy", function () {

    it("Invalid input", function () {
      expect(() => { carService.partsToBuy(1, [1, 2, 3]) }).throw('Invalid input');
      expect(() => { carService.partsToBuy('1', [1, 2, 3]) }).throw('Invalid input');
      expect(() => { carService.partsToBuy({}, [1, 2, 3]) }).throw('Invalid input');
      expect(() => { carService.partsToBuy(undefined, [1, 2, 3]) }).throw('Invalid input');
      expect(() => { carService.partsToBuy([1, 2, 3]) }).throw('Invalid input');
      expect(() => { carService.partsToBuy([1, 2, 3], 1) }).throw('Invalid input');
      expect(() => { carService.partsToBuy([1, 2, 3], '1') }).throw('Invalid input');
      expect(() => { carService.partsToBuy([1, 2, 3], {}) }).throw('Invalid input');
      expect(() => { carService.partsToBuy([1, 2, 3], undefined) }).throw('Invalid input');
    });
    it("Happy path", function () {
      expect(carService.partsToBuy([], [1, 2])).to.be.eq(0);
      expect(carService.partsToBuy([{ part: "a", price: 10 }, { part: "b", price: 20}], ["a", "c"])).to.be.eq(10);
    });


  });


});
