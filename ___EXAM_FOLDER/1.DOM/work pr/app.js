
function solve() {
    let inputValues = Array.from(document.getElementById("signup").querySelectorAll('input'));
    let hireWorkerButton = document.getElementById('add-worker');



    let firedButton = document.getElementsByClassName('firea');
    let tBodyElement = document.getElementById('tbody');
    let budgetSumElement = document.getElementById('sum');
    let sum = 0;
    hireWorkerButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (inputValues[0].value !== '' && inputValues[1].value !== '' && inputValues[2].value !== '' && inputValues[3].value !== ''
            && inputValues[4].value !== '' && inputValues[5].value !== '') {
            let trEl = document.createElement('tr');
            tBodyElement.appendChild(trEl);

            sum += Number(inputValues[5].value);
            budgetSumElement.textContent = Math.round(sum).toFixed(2);

            for (let index = 0; index < inputValues.length; index++) {
                const element = inputValues[index].value; // first name
                let tdEl = document.createElement('td'); // new td
                tdEl.textContent = element; // td = firstname
                trEl.appendChild(tdEl);
                if (index === inputValues.length - 1) {
                    let tdEl = document.createElement('td'); // new td
                    tdEl.innerHTML = "<button class='fired'>Fired</button> <button class='edit'>Edit</button>"
                    trEl.appendChild(tdEl);
                }
            }
            inputValues.forEach(element => {
                element.value = '';
            });
        }
        let fireButton = document.querySelector('.fired');
        fireButton.addEventListener('click', (ev) => {
            let tdElements = Array.from(tBodyElement.querySelectorAll('td'));
            sum -= Number(tdElements[5].textContent);
            budgetSumElement.textContent = Math.round(sum).toFixed(2);
            tBodyElement.innerHTML = '';
        })
        let editButton = document.querySelector('.edit');
        editButton.addEventListener('click', (ev) => {
            ev.preventDefault();

            let tdElements = Array.from(tBodyElement.querySelectorAll('td'));
            sum -= Number(tdElements[5].textContent);
            budgetSumElement.textContent = Math.round(sum).toFixed(2);
            tdElements.pop();
            for (let i = 0; i < tdElements.length; i++) {
                inputValues[i].value = tdElements[i].textContent
            }
            tBodyElement.innerHTML = '';

        })
      

    })


}

solve();