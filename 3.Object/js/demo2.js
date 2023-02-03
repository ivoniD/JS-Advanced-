function solve(){
    let car = {
        model: 'BMW',
        maxSpeed: 300,
        years: 7,
        horsePower: 300,
        move: function(km){
            return this.maxSpeed * this.horsePower * km
        }
    }
    console.log(car.move(2))

}
solve()