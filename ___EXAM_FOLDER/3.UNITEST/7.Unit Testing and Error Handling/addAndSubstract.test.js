const { createCalculator }  = require('./addAndSubstract');

const { expect } = require('chai');

    describe('calculation', () => {
        let sum = createCalculator();
        it('is it a function', () => {
expect(typeof createCalculator().get).to.equal('function');
expect(typeof createCalculator().add).to.equal('function');
expect(typeof createCalculator().subtract).to.equal('function');
        })
        it('is it an object', () => {
            expect( typeof createCalculator()).to.equal('object')
        })
        it('returns sum after add', () => {
            let sum = createCalculator();
            sum.add('5')
            expect(sum.get()).to.equal(5);
        
        })
        it('returns NaN', () => {
            let sum = createCalculator();
            sum.subtract(NaN)
            expect(sum.get())===(NaN);
        })
        it('returns NaN', () => {
            let sum = createCalculator();
            sum.subtract('sss')
            expect(sum.get())===(NaN);
        })
        it('returns NaN', () => {
            let sum = createCalculator();
            sum.subtract(undefined)
            expect(sum.get())===(NaN);
        })
        it('returns NaN', () => {
            let sum = createCalculator();
            sum.subtract({undefined})
            expect(sum.get())===(NaN);
        })
        
    })


/**
•	Return a module (object), containing the functions add(), subtract() and get() as properties
•	Keep an internal sum that can’t be modified from the outside
•	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) 
    that is added or subtracted from the internal sum
•	The function get() returns the value of the internal sum
 */
        //add: function(num) { value += Number(num); },
       // subtract: function(num) { value -= Number(num); },
       // get: function() { return value; }