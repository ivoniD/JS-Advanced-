
const {rentCar} = require('./rent car');
const { expect } = require('chai');

describe("Rent Car", function() {

    describe("searchCar", function() {
        it("type of", function() {
            expect(typeof rentCar.searchCar).to.be.eq('function');
            expect(typeof rentCar).to.be.eq('object');
        });
        it("invalid input", function() {
            expect(() => {rentCar.searchCar(['one', 'two', 'three'], 1)}).throw('Invalid input'); 
            expect(() => {rentCar.searchCar(['one', 'two', 'three'], [])}).throw('Invalid input'); 
            expect(() => {rentCar.searchCar(['one', 'two', 'three'], {})}).throw('Invalid input'); 
            expect(() => {rentCar.searchCar(['one', 'two', 'three'], undefined)}).throw('Invalid input');
            expect(() => {rentCar.searchCar('bmw', 'bmw')}).throw('Invalid input');
            expect(() => {rentCar.searchCar(1, 'bmw')}).throw('Invalid input');
            expect(() => {rentCar.searchCar({}, 'bmw')}).throw('Invalid input');
            expect(() => {rentCar.searchCar(undefined, 'bmw')}).throw('Invalid input');
            expect(() => {rentCar.searchCar([])}).throw('Invalid input');
        });
        it("happy path", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")).to.be.eq('There is 1 car of model Audi in the catalog!');
            expect(rentCar.searchCar(["BMW", "Volkswagen", "BMW", "Audi", "BMW"], "BMW")).to.be.eq('There is 3 car of model BMW in the catalog!');
        });
        it("no matching elements", function() {
            expect(() => {rentCar.searchCar(["Volkswagen", "BMW"], "Audi")}).throw('There are no such models in the catalog!'); 
        });
     });
     

     describe("calculatePriceOfCar", function() {
        it("type of", function() {
            expect(typeof rentCar.calculatePriceOfCar).to.be.eq('function');
        });
        it("invalid input", function() {
            expect(() => {rentCar.calculatePriceOfCar('Audi', 'Audi')}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar('Audi', [])}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar('Audi', {})}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar('Audi', 4.7)}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar('Audi', undefined)}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar(1, 1)}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar([], 1)}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar({}, 1)}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar(undefined, 1)}).throw('Invalid input'); 
            expect(() => {rentCar.calculatePriceOfCar('Audi')}).throw('Invalid input');     
        });
        it("happy path", function() {
            expect(rentCar.calculatePriceOfCar('Toyota', 1)).to.be.eq(`You choose Toyota and it will cost $40!`);
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.be.eq(`You choose Mercedes and it will cost $100!`);   
        });
        it("no matching elements", function() {
            expect(() => {rentCar.calculatePriceOfCar("Trabant", 1)}).throw('No such model in the catalog!');   
        });

     });

     describe("checkBudget", function() {
        it("type of", function() {
            expect(typeof rentCar.checkBudget).to.be.eq('function');
        });
        it("invalid input", function() {
            expect(() => {rentCar.checkBudget('1', 1, 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, '1', 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, 1, '1')}).throw('Invalid input');
            expect(() => {rentCar.checkBudget([], 1, 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, [], 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, 1, [])}).throw('Invalid input');
            expect(() => {rentCar.checkBudget({}, 1, 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1,{}, 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, 1, {})}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, 1, undefined)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(1, undefined, 1)}).throw('Invalid input');
            expect(() => {rentCar.checkBudget(undefined, 1, 1)}).throw('Invalid input');       
            expect(() => {rentCar.checkBudget(10.5, 1, 1)}).throw('Invalid input');       
        });
        it("happy path", function() {
            expect(rentCar.checkBudget(1,1,1)).to.be.eq('You rent a car!');
            expect(rentCar.checkBudget(1,1,2)).to.be.eq('You rent a car!');
            expect(rentCar.checkBudget(1,1,2)).to.be.eq('You rent a car!');
            expect(rentCar.checkBudget(2,1,1)).to.be.eq('You need a bigger budget!');
            expect(rentCar.checkBudget(1,3,1)).to.be.eq('You need a bigger budget!');


            //You need a bigger budget!
        });
     });
});
