class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }
        let newPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };

        this.plants.push(newPlant);
        this.spaceAvailable -= spaceRequired;
        return (`The ${plantName} has been successfully planted in the garden.`)
    }

    ripenPlant(plantName, quantity) {
        let plant = null;
        if (!this.plants.some(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } else {
            for (const x of this.plants) {
                plant = this.plants.find(x => x.plantName == plantName);
                break;
            }
        }
        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        plant.ripe = true;
        plant.quantity += quantity;
        if (plant.quantity == 1) {
            return (`${quantity} ${plantName} has successfully ripened.`)
        } else {
            return (`${quantity} ${plantName}s have successfully ripened.`)
        }
    }
    harvestPlant(plantName) {
        let plant = null;
        let quantity = null;
        if (!this.plants.some(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } else {
            for (const x of this.plants) {
                plant = this.plants.find(x => x.plantName == plantName);
                break;
            }
        }
        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe."`)
        }
        quantity = plant.quantity;
        this.spaceAvailable -= plant.spaceRequired;
        let obj = { plantName, quantity }
        this.storage.push(obj);
        this.plants = this.plants.filter(x => x.plantName != plantName)
        return (`The ${plantName} has been successfully harvested.`)
    }
    generateReport() {
        //let firstLine = `The garden has ${ this.spaceAvailable } free space left.`

        let planstasString = this.plants.map(x => x.plantNmae)
            .sort((a, b) => a.localeCompare(b));
        let secline = `Plants in the garden: ${planstasString.join(', ')}`;

        let thirdLine = `Plants in storage: The storage is empty.`;
        if (this.storage.length > 0) {
            let storageasString = this.storage.map(x => `${x.plantName} (${x.quantity})`);
            thirdLine = `Plants in storage: ${storageasString.join(', ')}`

        }
        let result = [];
        result.push(firstLine);
        result.push(secline);
        result.push(thirdLine);
        return result.join('\n')
    }

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


/**
The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The raspberry has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
The orange has been successfully harvested.
The garden has 220 free space left.
Plants in the garden: apple, raspberry
Plants in storage: orange (1)



 */

