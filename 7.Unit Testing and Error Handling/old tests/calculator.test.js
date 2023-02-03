const createCalculator = require('./calculator');
const expect = require('chai');
const assert = require('chai');

/*
•	Return a module (object), containing the functions add(), subtract() and get() as properties
•	Keep an internal sum that can’t be modified from the outside
•	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
•	The function get() returns the value of the internal sum
 */

describe('Add and Substract tests', () => {
    let calc = createCalculator()
    it('Is a function typeof function', () => {
        assert.expect(typeof createCalculator, 'function')
    })
    it('Add is an obj', () => {
        assert.expect(calc.add, 'object')
    })
    it('Substract is an obj', () => {
        assert.expect(calc.substract,'object')
    })
    it('Get is an obj', () => {
        assert.expect(calc.get,'object')
    })
    //ADD
    it('add 5*3 = 15', () => {
        calc.add(5)
        calc.add(5)
        calc.add(5)
        assert.expect(calc.get === 15)
    })
    it('add 5.5 = 18.5', () => {
        
        assert.expect(calc.add(5.5) === 18.5)
    })
    

})


