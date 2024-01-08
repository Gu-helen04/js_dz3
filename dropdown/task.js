
document.addEventListener("DOMContentLoaded", function() {
    const buttonPress = document.querySelector('.content');
    buttonPress.addEventListener('click', (event) => {event.preventDefault()});
    buttonPress.addEventListener('click', click);
    
    
    function click(event) {
        const dropdown = [...document.querySelectorAll('.dropdown')];
        for (let dropd of dropdown){
            let dropdownList = dropd.querySelector('.dropdown__list');
            if (event.target.className == 'dropdown__value'){ 
                dropdownList.classList.toggle('dropdown__list_active');
            } 
            else if (event.target.className == 'dropdown__link'){
                const dropdownValue = document.querySelector('.dropdown__value');
                dropdownValue.textContent =  event.target.textContent;
                dropdownList.classList.remove('dropdown__list_active');
            }  
        }
    }
})      




