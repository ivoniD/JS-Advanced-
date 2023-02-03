class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {}; //key-value = peak’s name : its altitude
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        //•	difficultyLevel – "hard" or "easy"
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (Number(this.resources) == 0) {
                throw new Error(`You don't have enough resources to start the hike`);
            }
        }

        if ((this.resources - (time * 10)) < 0) {
            return "You don't have enough resources to complete the hike";
        }

        let hike = { peak, time, difficultyLevel };
        this.listOfHikes.push(hike);
        let percent = (this.resources - (time * 10));
        this.resources -= (time * 10);
        return `You hiked ${peak} peak for ${time} hours and you have ${percent}% resources left`

    }
    rest(time) {
        this.resources += (time * 10);
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }
    showRecord(criteria) {
        //"hard", "easy", "all".
        let result = [];
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }
        if (criteria == 'all') {
            
            let firstLine = 'All hiking records:';
            result.push(firstLine);
            this.listOfHikes.forEach(x => result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`));
            return result.join('\n');
        }
        /**филтрирам по критерия и сортирам по време после и принтирам първия елемент */
if(!this.listOfHikes[criteria]){
    return `${this.username} has not done any ${criteria} hiking yet`
}

        this.listOfHikes = this.listOfHikes.filter(x => x.difficultyLevel == criteria).sort((a,b) => b.time - a.time);
return `${this.username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`




    }
}



const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

