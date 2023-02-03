function create(input) {
  let inputArr = input;
  let parentEl = document.getElementById('content');

  for(let i = 0; i < inputArr.length; i++){
     let div = document.createElement('div');
     let p = document.createElement('p');
     let text = document.createTextNode(inputArr[i]);

     p.appendChild(text);
     
     div.appendChild(p);
    p.style.display = 'none'
    div.addEventListener('click', function (e) {
    e.target.children[0].style.display = 'block'
     })

    parentEl.appendChild(div)
  }
  
}