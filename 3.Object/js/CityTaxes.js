function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percentage) {
            this.population += (this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= (this.treasury * percentage / 100);
        }
    }
    return result;
}
const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);




/* 
taxRate with an initial value of 10, and three methods for managing the city:
•	collectTaxes() - Increase treasury by  population * taxRate
•	applyGrowth(percentage) - Increase population by given percentage
•	applyRecession(percentage) - Decrease treasury by given percentage

*/
