class SummerCamp {
    constructor(organizer, location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.')
        }

        if (this.priceForTheCamp[condition] > money) {
            return ('The money is not enough to pay the stay at the camp.')
        }
        if (this.listOfParticipants.some(x => x.name == name)) {
            return (`The ${name} is already registered at the camp.`)
        }


        let obj = {
            name,
            condition,
            power: 100,
            wins: 0
        };
        this.listOfParticipants;

        return (`The ${name} was successfully registered.`)
    }

    unregisterParticipant(name) {

        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        else {
            const index = this.listOfParticipants.findIndex(x => x.name == name);
            this.listOfParticipants.splice(index);
        }
        return (`The ${name} removed successfully.`)
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let partis1 = null;
        let partis2 = null;
        if (typeOfGame === 'Battleship') {
            partis1 = this.listOfParticipants.find(x => x.name == participant1)
            if (!partis1) {
                throw new Error(`Invalid entered name.`);
            }
            partis1.power += 20;
            return (`The ${participant1} successfully completed the game ${typeOfGame}.`)
        }
        else if (typeOfGame === 'WaterBalloonFights') {
            partis1 = this.listOfParticipants.find(x => x.name == participant1);
            partis2 = this.listOfParticipants.find(x => x.name == participant2);
            if (!partis1) {
                throw new Error(`Invalid entered names.`);
            }
            if (!partis2) {
                throw new Error(`Invalid entered names.`);
            }
            if (partis1.condition !== partis2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (partis1.power > partis2.power) {
                partis1.wins++;
                return (`The ${partis1.name} is winner in the game ${typeOfGame}.`)
            } else if(partis2.power > partis1.power){
                partis2.wins++;
                return (`The ${partis2.name} is winner in the game ${typeOfGame}.`)
            }else {
                return ('There is no winner.')
            }
        }

    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
            })

        return result.join('\n');
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());





