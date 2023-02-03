
const { flowerShop } = require('./flowersShop');
const { expect } = require('chai');

describe('flowerShop', function() {
    describe("calcPriceOfFlowers", function() {
        it("happy path", function() {
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 1)).to.be.eq('You need $2.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 4, 2)).to.be.eq('You need $8.00 to buy rose!');
        });
        it("invalid input", function() {
            expect(() => {flowerShop.calcPriceOfFlowers([], 1, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers({}, 1, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers(1, 1, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers(undefined, 1, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', [], 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', {}, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1.1, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', undefined, 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 'str', 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1, 1.1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1, [])}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1, {})}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1, undefined)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1, 'str')}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt', 1)}).throw('Invalid input');
            expect(() => {flowerShop.calcPriceOfFlowers('srt')}).throw('Invalid input');
        });

     });

     describe("checkFlowersAvailable", function() {
        it("happy path", function() {
            expect(flowerShop.checkFlowersAvailable("Orchid", ["Rose", "Lily", "Orchid"])).to.be.eq('The Orchid are available!');
            expect(flowerShop.checkFlowersAvailable("O", ["Rose", "Lily", "Orchid"])).to.be.eq('The O are sold! You need to purchase more!')
            expect(flowerShop.checkFlowersAvailable("1", ["1", "2", "3"])).to.be.eq('The 1 are available!')
        });
     });

     describe("sellFlowers", function() {
        it("invalid input", function() {
            expect(() => {flowerShop.sellFlowers([], [])}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers('', [])}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers('', {})}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers([], 'k')}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers([], -9)}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers([], undefined)}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers([])}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers([], 5.7)}).throw('Invalid input');
            expect(() => {flowerShop.sellFlowers(6, 5)}).throw('Invalid input');
           
        });
        it("TODO …", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "hhhjh"], 3)).to.be.eq('Rose / Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily"], 0)).to.be.eq('Lily');
       //["Rose", "Lily", "Orchid"]);
        });
     });
     
});

