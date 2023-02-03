const lookupChar = require('./charLookup');
const { expect } = require('chai');

describe('Happy path', () => {
    it('With Hi and 0 returns H', () => {
        expect(lookupChar('Hi', 0)).to.be.eq('H');
    })
    it('With Hi and 0 returns i', () => {
        expect(lookupChar('Hi', 1)).to.be.eq('i');
    })
})

describe('Check for undefined inputs', () => {
    it('Arr as first param, returns undefined', () => {
        expect(lookupChar([], 1)).to.be.eq(undefined);
    })
    it('Object as first param, returns undefined', () => {
        expect(lookupChar({}, 1)).to.be.eq(undefined);
    })
    it('Number as first param, returns undefined', () => {
        expect(lookupChar(1, 1)).to.be.eq(undefined);
    })
    it('undefined as first param, returns undefined', () => {
        expect(lookupChar(undefined, 1)).to.be.eq(undefined);
    })
    it('string num as second param, returns undefined', () => {
        expect(lookupChar('car', '1')).to.be.eq(undefined);
    })
    it('string as second param, returns undefined', () => {
        expect(lookupChar('car', 'car')).to.be.eq(undefined);
    })
    it('object as second param, returns undefined', () => {
        expect(lookupChar('car', {})).to.be.eq(undefined);
    })
    it('arr as second param, returns undefined', () => {
        expect(lookupChar('car', [])).to.be.eq(undefined);
    })
    it('Without second param, returns undefined', () => {
        expect(lookupChar('car')).to.be.eq(undefined);
    })
    it('Second param float', () => {
        expect(lookupChar('Hi', 2.5)).to.be.eq(undefined);
    })
})

describe('incorect index cases', () => {
    it('Second param negative number', () => {
        expect(lookupChar('Hi', -1)).to.be.eq('Incorrect index');
    })
    it('Second param num - biger than string length', () => {
        expect(lookupChar('Hi', 3)).to.be.eq('Incorrect index');
    })
    it('Second param num = string length', () => {
        expect(lookupChar('Hi', 2)).to.be.eq('Incorrect index');
    })
    
})
