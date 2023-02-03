function lockedProfile() {
    let buttonsElements = Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', onClick));
    let hiddenElement = document.getElementById('user2HiddenFields');
    function onClick(e) {
        let profile = e.target.parentElement;
        let unLock = profile.querySelector('input[value="unlock"]').checked;

        let buttonTextElement = e.target;

        let info = Array.from(profile.querySelectorAll('div'))
        .find(p => p.id.includes('HiddenFields'))

        if (unLock) {

            if (buttonTextElement.textContent === 'Show more') {
                info.style.display = 'block'
                buttonTextElement.textContent = 'Hide it'
            } else {
                info.style.display = 'none'
                buttonTextElement.textContent = 'Show more'
            }
            
        }
    }
}







