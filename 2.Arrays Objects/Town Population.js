function solve(arr) {
  const town = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].split(" <->");
    let city = element[0];
    let pop = Number(element[1]);
    if (!town[city]) {
      town[city] = 0;
    }
    town[city] += pop;
  }
  for (const key in town) {
    console.log(`${key} : ${town[key]}`);
  }
}
