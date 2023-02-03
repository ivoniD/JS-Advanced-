const { mathEnforcer } = require('./mathEnforcer');
const { expect } = require('chai');

describe('mathEnforcer', () => {
    describe('Add Five', () => {
        it('typeof', () => {
            expect(typeof mathEnforcer.addFive).to.be.eq('function');
        })
        it('happy path with number', () => {
            expect(mathEnforcer.addFive(5)).to.be.eq(10);
        })
        it('happy path with float', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.eq(10.5);
        })
        it('happy path with negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.eq(0);
        })
        it('happy path with zero', () => {
            expect(mathEnforcer.addFive(0)).to.be.eq(5);
        })
        it('string num parram', () => {
            expect(mathEnforcer.addFive('1')).to.be.eq(undefined);
        })
        it('string parram', () => {
            expect(mathEnforcer.addFive('one')).to.be.eq(undefined);
        })
        it('object parram', () => {
            expect(mathEnforcer.addFive({})).to.be.eq(undefined);
        })
        it('arr parram', () => {
            expect(mathEnforcer.addFive([])).to.be.eq(undefined);
        })
        it('undef parram', () => {
            expect(mathEnforcer.addFive(undefined)).to.be.eq(undefined);
        })
    })

    describe('Substract Ten', () => {
        it('typeof', () => {
            expect(typeof mathEnforcer.subtractTen).to.be.eq('function');
        })
        it('happy path with number', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.eq(10);
        })
        it('happy path with float', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.be.eq(5.5);
        })
        it('happy path with negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.eq(-20);
        })
        it('happy path with zero', () => {
            expect(mathEnforcer.subtractTen(0)).to.be.eq(-10);
        })
        it('string num parram', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.eq(undefined);
        })
        it('string parram', () => {
            expect(mathEnforcer.subtractTen('one')).to.be.eq(undefined);
        })
        it('object parram', () => {
            expect(mathEnforcer.subtractTen({})).to.be.eq(undefined);
        })
        it('arr parram', () => {
            expect(mathEnforcer.subtractTen([])).to.be.eq(undefined);
        })
        it('undef parram', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.eq(undefined);
        })
    })

    describe('Sum', () => {
        it('typeof', () => {
            expect(typeof mathEnforcer.sum).to.be.eq('function');
        })
        it('happy path with number', () => {
            expect(mathEnforcer.sum(20,10)).to.be.eq(30);
        })
        it('happy path with float', () => {
            expect(mathEnforcer.sum(10, 5.5)).to.be.eq(15.5);
        })
        it('happy path with large float', () => {
            expect(mathEnforcer.sum(1.00001, 1.44444)).to.be.eq(2.44445);
        })
        it('happy path with negative number', () => {
            expect(mathEnforcer.sum(-10, 5)).to.be.eq(-5);
        })
        it('happy path with zero', () => {
            expect(mathEnforcer.sum(0, 0)).to.be.eq(0);
        })
        it('string num first parram, second integer', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.eq(undefined);
        })
        it('string first parram, second integer', () => {
            expect(mathEnforcer.sum('one', 1)).to.be.eq(undefined);
        })
        it('string second parram, first integer', () => {
            expect(mathEnforcer.sum(1, 'one')).to.be.eq(undefined);
        })
        it('string second parram, first integer', () => {
            expect(mathEnforcer.sum(1, 'one')).to.be.eq(undefined);
        })
        it('string first and second parrams', () => {
            expect(mathEnforcer.sum('one', 'one')).to.be.eq(undefined);
        })
        it('object first params', () => {
            expect(mathEnforcer.sum({}, 1)).to.be.eq(undefined);
        })
        it('object second param', () => {
            expect(mathEnforcer.sum(1, {})).to.be.eq(undefined);
        })
        it('arr first params', () => {
            expect(mathEnforcer.sum([], 1)).to.be.eq(undefined);
        })
        it('arr second params', () => {
            expect(mathEnforcer.sum(1, [])).to.be.eq(undefined);
        })
        it('undef first params', () => {
            expect(mathEnforcer.sum(undefined, 1)).to.be.eq(undefined);
        })
        it('undef first params', () => {
            expect(mathEnforcer.sum(1, undefined)).to.be.eq(undefined);
        })
        it('only one params', () => {
            expect(mathEnforcer.sum(1)).to.be.eq(undefined);
        })
    })
})