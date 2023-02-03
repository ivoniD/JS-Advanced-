function solve() {
    let inputArr = [];
    let nameEl = document.getElementById('recipientName');
    let titleEl = document.getElementById('title');
    let messageEl = document.getElementById('message');
    let addButton = document.getElementById('add');
    let resetButton = document.getElementById('reset');
    let ulEl = document.getElementById('list');




    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        inputArr = []
        let liEl = document.createElement('li');
        let h4TitleEl = document.createElement('h4');
        let h4Name = document.createElement('h4');
        let spanEl = document.createElement('span');
        let divEl = document.createElement('div');
        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.type = 'submit';
        sendButton.id = 'send';
        let deletebutton = document.createElement('button');
        deletebutton.textContent = 'Delete';
        deletebutton.type = 'submit';
        deletebutton.id = 'delete';


        if (nameEl.value == '' || titleEl.value == '' || messageEl.value == '') {
            return;
        }
        h4TitleEl.textContent = `Title: ${titleEl.value}`;
        h4Name.textContent = `Recipient Name: ${nameEl.value}`;
        spanEl.textContent = messageEl.value;
        inputArr.push(titleEl.value);
        inputArr.push(nameEl.value);
        inputArr.push(messageEl.value);

        divEl.id = 'list-action';
        ulEl.appendChild(liEl);
        liEl.appendChild(h4TitleEl);
        liEl.appendChild(h4Name);
        liEl.appendChild(spanEl);
        liEl.appendChild(divEl);
        divEl.appendChild(sendButton);
        divEl.appendChild(deletebutton);

        nameEl.value = '';
        titleEl.value = '';
        messageEl.value = '';

        sendButton.addEventListener('click', (ev) => {
            ev.preventDefault();
            let ul = document.querySelector('.sent-list')

            let liEl = document.createElement('li');
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${inputArr[0]}`
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${inputArr[1]}`
            let divEl = document.createElement('div');
            divEl.class = 'btn';
            let buttonDel = document.createElement('button');
            buttonDel.type = 'submit';
            buttonDel.class = 'delete';
            buttonDel.textContent = 'Delete';



            ul.appendChild(liEl);
            liEl.appendChild(spanTo);
            liEl.appendChild(spanTitle);
            liEl.appendChild(divEl);

            divEl.appendChild(buttonDel);
            ulEl.innerHTML = '';

            buttonDel.addEventListener('click', (ev) => {
                const target = ev.currentTarget;
                let ulDe = document.querySelector('.delete-list')
                let liElem = document.createElement('li');
                ulDe.appendChild(liElem);
                liElem.appendChild(spanTo);
                liElem.appendChild(spanTitle);
                ul.innerHTML = '';
            })

        })

        deletebutton.addEventListener('click', (ev) => {
            ev.preventDefault();
            let ulDelList = document.querySelector('.delete-list')
            let liEl = document.createElement('li');
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${inputArr[0]}`
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${inputArr[1]}`;
            ulDelList.appendChild(liEl);
            liEl.appendChild(spanTo);
            liEl.appendChild(spanTitle);
            ulEl.innerHTML = '';
        })

    })
    resetButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        nameEl.value = '';
        titleEl.value = '';
        messageEl.value = '';
    })


}
solve()