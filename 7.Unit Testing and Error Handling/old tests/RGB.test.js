const rgbToHexColor = require('../RGB')
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('rgbToHexColor', () => {
    //VALID
    it('all inputs are integers', () => {
        assert.equal(rgbToHexColor(10, 20, 30), '#0A141E')
    })
    it('one parameter  is zero', () => {
        assert.equal(rgbToHexColor(0, 2, 30), '#00021E')  
    })
    it('one parameter  is 255', () => {
        assert.equal(rgbToHexColor(10, 255, 30), '#0AFF1E')  
    })
    it('all inputs are zero', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')  
    })
    it('all inputs are 255', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF')  
    })
    //INVALID
    it('one input is not integer', () => {
        assert.equal(rgbToHexColor('10', 20, 30), undefined)  
        assert.equal(rgbToHexColor(20, '10', 30), undefined)  
        assert.equal(rgbToHexColor(10, 20, '10'), undefined)  
    })
    it('all inputs are not integers', () => {
        assert.equal(rgbToHexColor('10', '20', '30'), undefined)  
    })
    it('one parameter is missing', () => {
        assert.equal(rgbToHexColor('20', '30'), undefined)  
    })
    it('two parameters are missing', () => {
        assert.equal(rgbToHexColor( '30'), undefined)  
    })
    it('one parameter negative number', () => {
        assert.equal(rgbToHexColor(-2, 20, 30), undefined)  
    })
    it('one parameter floating point number', () => {
        assert.equal(rgbToHexColor(2, 20.5, 30), undefined)  
    })
    it('one parameter  is undefined', () => {
        assert.equal(rgbToHexColor(undefined, 20, 30), undefined)  
    })
    it('one parameter  is null', () => {
        assert.equal(rgbToHexColor(null, 20, 30), undefined)  
    })
    it('one parameter  is arr', () => {
        assert.equal(rgbToHexColor([], 20, 30), undefined)  
    })
    it('one parameter  is obj', () => {
        assert.equal(rgbToHexColor({}, 20, 30), undefined)  
    })
    it('one parameter  is over 255', () => {
        assert.equal(rgbToHexColor(10, 258, 30), undefined)  
    })
    it('all inputs are negative num', () => {
        assert.equal(rgbToHexColor(-5, -20, -4), undefined)  
    })
    it('No inputs', () => {
        assert.equal(rgbToHexColor(), undefined)  
    })
    it('No inputs', () => {
        assert.equal(rgbToHexColor(15, 15, 15), '#0F0F0F')  
    })
})

//•	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
//•	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//•	Return undefined if any of the input parameters are of an invalid type or not in the expected range
