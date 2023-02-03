const { bookSelection } = require('./bookSelection');
const { expect } = require('chai');

describe("Tests …", function () {
  describe("isGenreSuitable", function () {

    it("are not suitable ", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 1)).to.be.eq(`Books with Thriller genre are not suitable for kids at 1 age`);
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.eq(`Books with Thriller genre are not suitable for kids at 12 age`);
      expect(bookSelection.isGenreSuitable("Horror", 1)).to.be.eq(`Books with Horror genre are not suitable for kids at 1 age`);
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.eq(`Books with Horror genre are not suitable for kids at 12 age`);
    });
    it("happy path", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 13)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Horror", 13)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Comedy", 1)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Comedy", 12)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Comedy", 13)).to.be.eq(`Those books are suitable`);
    });
  });

  describe("isGenreSuitable", function () {

    it("are not suitable ", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 1)).to.be.eq(`Books with Thriller genre are not suitable for kids at 1 age`);
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.eq(`Books with Thriller genre are not suitable for kids at 12 age`);
      expect(bookSelection.isGenreSuitable("Horror", 1)).to.be.eq(`Books with Horror genre are not suitable for kids at 1 age`);
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.eq(`Books with Horror genre are not suitable for kids at 12 age`);
    });
    it("happy path", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 13)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Horror", 13)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Comedy", 1)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Comedy", 12)).to.be.eq(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable("Comedy", 13)).to.be.eq(`Those books are suitable`);
    });
  });

  describe("isItAffordable", function () {

    it("Invalid input", function () {
      expect(() => { bookSelection.isItAffordable('1', 1) }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable(1, '1') }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable('1', '1') }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable([], '1') }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable(1, []) }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable({}, 1) }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable(1, {}) }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable(1, undefined) }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable(undefined, 1) }).throw('Invalid input');
      expect(() => { bookSelection.isItAffordable(1) }).throw('Invalid input');
    });
    it("happy path", function () {
      expect(bookSelection.isItAffordable(1, 2)).to.be.eq(`Book bought. You have 1$ left`);
      expect(bookSelection.isItAffordable(1, 1)).to.be.eq(`Book bought. You have 0$ left`);
      expect(bookSelection.isItAffordable(1.5, 3)).to.be.eq(`Book bought. You have 1.5$ left`);
      expect(bookSelection.isItAffordable(1.5, 3)).to.be.eq(`Book bought. You have 1.5$ left`);
      expect(bookSelection.isItAffordable(2, 1)).to.be.eq(`You don't have enough money`);
      expect(bookSelection.isItAffordable(1, 0)).to.be.eq(`You don't have enough money`);
    });
  });
  describe("suitableTitles", function () {

    it("invalid input", function () {
      expect(() => { bookSelection.suitableTitles('str', [])}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles('str', 'str')}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles([], [])}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles([], 5)}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles(5, 5)}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles(undefined, 5)}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles(5, undefined)}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles({}, 'str')}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles([])}).throw('Invalid input');
      expect(() => { bookSelection.suitableTitles('str')}).throw('Invalid input');
    });
    it("happy path", function () {
      expect(bookSelection.suitableTitles([{ title: "a", genre: "cc" }, { title: "d", genre: "cc"}, { title: "s", genre: "n" }], 'x')).to.deep.equal([]);
      expect(bookSelection.suitableTitles([{ title: "a", genre: "cc" }, { title: "d", genre: "cc"}, { title: "s", genre: "n" }], 'cc')).to.deep.equal(['a', 'd']);
    });

  });

});
