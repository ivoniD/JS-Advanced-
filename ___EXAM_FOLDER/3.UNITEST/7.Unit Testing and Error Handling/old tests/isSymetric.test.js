const isSymmetric = require('./isSymetric');
const expect = require('chai').expect;

describe('symetric check', () => {
    it('Input is symetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('Input is Not symetric', () => {
        expect(isSymmetric([1, 3, 4])).to.be.false;
    });
    it('Is not array', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it('Word array is symetric', () => {
        expect(isSymmetric(['two', 'two', 'two', 'two'])).to.be.true;
    });
    it('Word array is Not symetric', () => {
        expect(isSymmetric(['two', 'two', 'one', 'two'])).to.be.false;
    });
    it('String is not arr', () => {
        expect(isSymmetric('twotwo')).to.be.false;
    });
    it('3 element arr is symetric', () => {
        expect(isSymmetric([1, 2, 1,])).to.be.true;
    });
    it('type missmatch', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

});



