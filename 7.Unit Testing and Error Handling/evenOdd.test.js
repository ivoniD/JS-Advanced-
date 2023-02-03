const {isOddOrEven} = require('./evenOdd');
const {expect} = require('chai');

describe('wrong input', () => {
    it('input arr, returns undefined', () => {
        expect(isOddOrEven([]))===(undefined);
    })
    it('input obj, returns undefined', () => {
        expect(isOddOrEven({}))===(undefined);
    })
    it('input empty string, returns undefined', () => {
        expect(isOddOrEven(''))===(undefined);
    })
    it('input undefined string, returns undefined', () => {
        expect(isOddOrEven(undefined))===(undefined);
    })
    it('input 444 num, returns undefined', () => {
        expect(typeof isOddOrEven(444)).to.equal('undefined');
    })
})

describe('odd input', () => {
    it('input hello, returns odd', () => {
        expect(isOddOrEven('hello')).to.equal('odd');
    })
    it('input H, returns odd', () => {
        expect(isOddOrEven('h')).to.equal('odd');
    })
    it('input 444 string, returns odd', () => {
        expect(isOddOrEven('444')).to.equal('odd');
    })
   
})

describe('even input', () => {
    it('input hi, returns odd', () => {
        expect(isOddOrEven('hi')).to.equal('even');
    })
    it('input ivon, returns odd', () => {
        expect(isOddOrEven('ivon')).to.equal('even');
    })
    it('input 22 string, returns odd', () => {
        expect(isOddOrEven('22')).to.equal('even');
    })
   
})