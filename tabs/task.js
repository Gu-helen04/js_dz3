document.addEventListener("DOMContentLoaded", function() {
    const buttonPress = document.querySelector('.tab__navigation');
    buttonPress.addEventListener('click', (event) => {event.preventDefault()});
    buttonPress.addEventListener('click', click);
    function click(event){
        let check = 0
        const tabs = [...document.querySelectorAll('.tab')]
        const cont = [...document.querySelectorAll('.tab__content')]
        for (let i of tabs){
            console.log(i)
            if ((i.className == 'tab tab_active')&&(event.target.className == 'tab')){
                i.classList.remove('tab_active')
                }}
        for (let i of tabs){
            if(i.textContent == event.target.textContent){
                i.classList.toggle('tab_active')
                check = tabs.indexOf(i)
            }
        }  
        
        console.log(check,cont.length)
        //console.log(tabs.indexOf(event.target.className))
        for(let i of cont){
            if (i.className == 'tab__content tab__content_active'){
                i.classList.remove('tab__content_active')
                
            }            
        }
            for(let el of  cont){
                index = cont.indexOf(el)
                if(index == check){
                    el.classList.toggle('tab__content_active')
                }
            }
        
        
        
    }
})