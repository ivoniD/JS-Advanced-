const {library} = require('./lib');
const { expect } = require('chai');

describe('Library checks', () => {
    describe("Price of book", () => {
        it("type to be object and function", () => {
            expect(typeof library.calcPriceOfBook).to.be.eq('function')
            expect(typeof library).to.be.eq('object')
        });
        it("invalid input", () => {
            expect(() => {library.calcPriceOfBook('str', 'str')}).throw('Invalid input');
            expect(() => {library.calcPriceOfBook('str', '5')}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook('str', 5.5)}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook('str', undefined)}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(5, 5)}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(5, 'str')}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(undefined, 1000)}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook('str')}).to.throw('Invalid input');
        });
        it("happy path", () => {
            let standardPrice = 20;
            expect(library.calcPriceOfBook('for people and waffles', 2000)).to.be.eq('Price of for people and waffles is 20.00');
            expect(library.calcPriceOfBook('for people and waffles', 1980)).to.be.eq('Price of for people and waffles is 10.00');
            expect(library.calcPriceOfBook('for people and waffles', 1900)).to.be.eq('Price of for people and waffles is 10.00');
        });
     });

     describe("Find book", () => {
        it("No books in array", () => {
            expect(() => {library.findBook([], 'str')}).throw('No books currently available');
        });
        it("Searched book is not there", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto", ], 'str')).to.be.eq('The book you are looking for is not here!');
        });
        it("found the book", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto", ], 'Troy')).to.be.eq('We found the book you want.');
        });
     });

     describe("Arrange the books", () => {
        it("invalid input", () => {
            expect(() => {library.arrangeTheBooks('4')}).throw('Invalid input'); 
            expect(() => {library.arrangeTheBooks([])}).throw('Invalid input'); 
            expect(() => {library.arrangeTheBooks({})}).throw('Invalid input'); 
            expect(() => {library.arrangeTheBooks(-5)}).throw('Invalid input'); 
            expect(() => {library.arrangeTheBooks(5.8)}).throw('Invalid input'); 
        });
        it("happy path", () => {
            expect(library.arrangeTheBooks(1)).to.be.eq('Great job, the books are arranged.');
           expect(library.arrangeTheBooks(40)).to.be.eq('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.be.eq('Insufficient space, more shelves need to be purchased.');
             
        });
     });
     
});
