const { sum, substract} = require('./sum_new');
const { expect } = require('chai');


describe('functionality', () => {
    it('valid input', () =>{
        expect(sum(4,5)).to.equal(9,'did not work with 4 and 5')
    })
    it('invalid input', () =>{
        if(sum('4',5) === undefined){
            throw new Error('Incorrect input')
        }
    })
    it('floating point num', () =>{
        if(sum(5.5,5) != 2){
            throw new Error('Incorrect input')
        }
    })
})