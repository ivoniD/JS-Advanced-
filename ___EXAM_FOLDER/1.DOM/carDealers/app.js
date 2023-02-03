window.addEventListener("load", solve);

function solve() {

  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let yearInputElement = document.getElementById('year');
  let fuelInputElement = document.getElementById('fuel');

  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');


  let publishButtonElement = document.getElementById('publish');
  publishButtonElement.type = 'button';

  let tableBodyElement = document.getElementById('table-body');

  let carsListElement = document.getElementById('cars-list');
  let profiElement = document.getElementById('profit');

  publishButtonElement.addEventListener('click', (ev) => {
    ev.preventDefault();

    if (!makeInputElement.value || !modelInputElement.value  || !originalCostElement.value || !sellingPriceElement.value) {
      return;
    }
    if (Number(originalCostElement.value) > Number(sellingPriceElement.value)) {
      return;
    }
    let trRowElement = document.createElement('tr');
    trRowElement.className = 'row';

    let tdMake = document.createElement('td');
    tdMake.textContent = makeInputElement.value;

    let tdModel = document.createElement('td');
    tdModel.textContent = modelInputElement.value;

    let tdYear = document.createElement('td');
    tdYear.textContent = yearInputElement.value;

    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuelInputElement.value;

    let tdOriginalPrice = document.createElement('td');
    tdOriginalPrice.textContent = originalCostElement.value;

    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPriceElement.value;

    let tdButtons = document.createElement('td');
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'action-btn edit';
    let sellButton = document.createElement('button');
    sellButton.textContent = 'Sell';
    sellButton.className = 'action-btn sell';
    tdButtons.appendChild(editButton);
    tdButtons.appendChild(sellButton);

    trRowElement.appendChild(tdMake);
    trRowElement.appendChild(tdModel);
    trRowElement.appendChild(tdYear);
    trRowElement.appendChild(tdFuel);
    trRowElement.appendChild(tdOriginalPrice);
    trRowElement.appendChild(tdSellingPrice);
    trRowElement.appendChild(tdButtons);

    tableBodyElement.appendChild(trRowElement);

    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelInputElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';

    editButton.addEventListener('click', () => {
      makeInputElement.value = tdMake.textContent;
      modelInputElement.value = tdModel.textContent;
      yearInputElement.value = tdYear.textContent;
      fuelInputElement.value = tdFuel.textContent;
      originalCostElement.value = tdOriginalPrice.textContent;
      sellingPriceElement.value = tdSellingPrice.textContent;

      trRowElement.remove();
    })

    sellButton.addEventListener('click', () => {

      let liElement = document.createElement('li');
      liElement.className = 'each-list';
      let spanModel = document.createElement('span');
      spanModel.textContent = `${tdMake.textContent} ${tdModel.textContent}`
      let spanYear = document.createElement('span');
      spanYear.textContent = `${tdYear.textContent}`
      let spanProffit = document.createElement('span');
      let proffit = Number(tdSellingPrice.textContent) - Number(tdOriginalPrice.textContent);
      spanProffit.textContent = proffit.toFixed(2);

      liElement.appendChild(spanModel);
      liElement.appendChild(spanYear);
      liElement.appendChild(spanProffit);

      carsListElement.appendChild(liElement);
      let totalProffit = Number(profiElement.textContent) + proffit;
      profiElement.textContent = totalProffit.toFixed(2);
      trRowElement.remove();
    })

  })

}
