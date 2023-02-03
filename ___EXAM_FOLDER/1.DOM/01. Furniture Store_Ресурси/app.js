window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');

    let addButtonElement = document.getElementById('add');
    let tableElement = document.getElementById('furniture-list');

    addButtonElement.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!modelElement.value || !descriptionElement.value) {
            return;
        }
        if(Number(yearElement.value) <= 0 || Number(priceElement.value) <= 0){
            return;
        }
        let infoTrElement = document.createElement('tr');
        infoTrElement.classList.add('info');
        let modelTdEl = document.createElement('td');
        modelTdEl.textContent = modelElement.value;
        let priceTdEl = document.createElement('td');
        priceTdEl.textContent = Number(priceElement.value).toFixed(2)
        let ButtonsTdElement = document.createElement('td');
        let moreLessButton = document.createElement('button');
        moreLessButton.classList.add('moreBtn');
        moreLessButton.textContent = 'More Info';
        let buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');
        buyButton.textContent = 'Buy it';

        
        infoTrElement.appendChild(modelTdEl);
        infoTrElement.appendChild(priceTdEl);
        infoTrElement.appendChild(ButtonsTdElement);
        ButtonsTdElement.appendChild(moreLessButton);
        ButtonsTdElement.appendChild(buyButton);
        
        tableElement.appendChild(infoTrElement);

        let hideTrElement = document.createElement('tr');
        hideTrElement.classList.add('hide');
        let yearTdElement = document.createElement('td');
        yearTdElement.textContent = `Year: ${yearElement.value}`
        let descriptionTdElement = document.createElement('td');
        descriptionTdElement.textContent = `Description: ${descriptionElement.value}`;
        descriptionTdElement.colSpan = "3";

        tableElement.appendChild(hideTrElement);
        hideTrElement.appendChild(yearTdElement);
        hideTrElement.appendChild(descriptionTdElement);

        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';

        moreLessButton.addEventListener('click', (ev) => {
            if(moreLessButton.textContent == 'More Info'){
                moreLessButton.textContent = 'Less Info';
                hideTrElement.style.display = 'contents';
            }else{
                moreLessButton.textContent = 'More Info';
                hideTrElement.innerHTML = 'class-"hide"'

        }
    })

        buyButton.addEventListener('click', (ev) => {
            let totalPriceElement = document.querySelector('.total-price')
            totalPriceElement.textContent = (Number(totalPriceElement.textContent) + Number(priceTdEl.textContent)).toFixed(2);
           // infoTrElement.remove();
           // hideTrElement.remove();
            tableElement.innerHTML = '';

        })
    })

}
