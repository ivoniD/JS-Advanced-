const { expect } = require('chai');
const  isSymmetric = require('./isSymetric');


describe('Symetrity ckecker', () => {
    it('happy path', () => {
        expect(isSymmetric([4,4,4,4])).to.equal(true);
        expect(isSymmetric(['two', 'one', 'one', 'two'])).to.equal(true);
    })
    it('input is not array', () => {
        expect(isSymmetric('4')).to.equal(false);
    })
    it('input is not array', () => {
        expect(isSymmetric({})).to.equal(false);
    })
    it('input is not array', () => {
        expect(isSymmetric(null)).to.equal(false);
    })
    it('input is not array', () => {
        expect(isSymmetric(undefined)).to.equal(false);
    })
    it(' num array is not symetric', () => {
        expect(isSymmetric([3,4,5,6])).to.equal(false);
    })
    it(' string array is not symetric', () => {
        expect(isSymmetric(['two', 'five'])).to.equal(false);
    })
    it(' string array is not symetric', () => {
        expect(isSymmetric(['two', 'five', 'zero'])).to.equal(false);
    })
    it(' mixed array is not symetric', () => {
        expect(isSymmetric(['1', 2, 1])).to.equal(false);
    })
})


/*•	Take an array as an argument
•	Return false for any input that isn’t of the correct type
•	Return true if the input array is symmetric
•	Otherwise, return false
 */