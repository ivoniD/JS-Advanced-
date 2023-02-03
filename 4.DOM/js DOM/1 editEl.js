function solve(ref, match, replacer){

    while(ref.textContent.includes(match)){
        ref.textContent = ref.textContent.replace(match, replacer);
    }
    
}