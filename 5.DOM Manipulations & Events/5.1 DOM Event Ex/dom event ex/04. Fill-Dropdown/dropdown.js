function addItem() {

    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');


    let option = document.createElement('option');
    option.text = newText.value;
    option.value = newValue.value;

    newText.value = '';
    newValue.value = '';

    let menu = document.getElementById('menu');

    menu.appendChild(option);
}