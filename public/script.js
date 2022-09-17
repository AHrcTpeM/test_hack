function activeTab(event) {
    const div1 = document.getElementsByClassName('red')[0];
    div1.setAttribute('class', 'tabs');

    event.target.setAttribute('class', 'red')
    //event.target.style.color = 'yellow';
    console.log(event.target.innerText);

    const arrayCards = document.getElementsByClassName('card');
    for (let i = 0; i < arrayCards.length; i++) {
        if (event.target.innerText === 'КИЇВ' && i < 4) {
            arrayCards[i].style.display = 'none';
        } else if (event.target.innerText === 'ЗАПОРІЖЖЯ' && i > 3) {
            arrayCards[i].style.display = 'none';
        } else {
            arrayCards[i].style.display = 'inline';
        }
            
    }    

}

function modalWindow(event) {
    console.log('working');
}