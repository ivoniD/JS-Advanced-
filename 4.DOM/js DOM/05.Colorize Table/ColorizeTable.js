function colorize() {
    let tabElements = document.getElementsByTagName('tr');
    let tableArr = Array.from(tabElements);

    tableArr.forEach((x, i) => {
        if(i % 2 != 0){
            x.style.backgroundColor = 'teal'
        }
    })
}