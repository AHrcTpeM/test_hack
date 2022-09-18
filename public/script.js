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

function activeTabForm(event) {
    const div1 = document.getElementsByClassName('red')[1];
    div1.setAttribute('class', 'tabs');

    event.target.setAttribute('class', 'red');
    
    if (event.target.innerText === 'ЗАПОРІЖЖЯ') {
        document.getElementById('form_adress').innerText = 'м. Запоріжжя, вулиця Шкільна, 56'
        document.getElementById('form_tel').innerText = '+38 (093) 973 87 77'
    } else if (event.target.innerText === 'КИЇВ') {
        document.getElementById('form_adress').innerText = 'м.Київ, вул. Верхній Вал, 24'
        document.getElementById('form_tel').innerText = '+38 (073) 126 00 72'
    }
    
}

function modalWindow(event) {
    console.log('working');
}

const form = document.getElementById('form');
const form2 = document.getElementById('form2');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value
    }
    data = JSON.stringify(data);
    if (formValidate(form2) === 2) {
        getModal2();
        console.log('good');
        fetch('/form', {
            method: 'POST',
            body: data,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((result) => {
            console.log(result);          
        })
        .catch((err) => console.log(err));
    }
    
})

form2.addEventListener('submit', (event) => {
    console.log(222);
    event.preventDefault();
    let data = {
        name: form2.name.value,
        email: form2.email.value,
        phone: form2.phone.value
    }
    data = JSON.stringify(data);
    console.log(formValidate(form2));
    if (formValidate(form2) === 2) {
        getModal2();
        console.log('good');
        fetch('/form', {
            method: 'POST',
            body: data,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((result) => {
            console.log(result);          
        })
        .catch((err) => console.log(err));
    }
    
})

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    formReq.forEach(elem => {
        elem.classList.remove('_error');
        if (elem.classList.contains('_email')) {
            if (emailTest(elem)) {
                elem.classList.add('_error');
            }
        } else if(elem.classList.contains('_num')) {
            if (elem.value.length !== 14) {
                elem.classList.add('_error');
                error++;
            }
        } else if(elem.classList.contains('_name')) {
            if (elem.value.length < 1) {
                elem.classList.add('_error');
                error++;
            }
        }
    }) 
    return error;
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') '+ x[2] + (x[3] ? '-' + x[3] : '');
});

document.getElementById('phone2').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') '+ x[2] + (x[3] ? '-' + x[3] : '');
});

(function arrowMagic() {
    arrow.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    window.addEventListener('scroll', function() {
        arrow.hidden = (scrollY < 100);
    });
})();

function getForm(event) {
    console.log(111111);
    document.getElementsByClassName('modal')[0].style = "opacity: 1; pointer-events: auto";
    //document.getElementsByClassName('modal')[0].style = "pointer-events: auto";
    //document.getElementById('openModal').setAttribute('onclick', "greySquareHidden();");
    
}

function closeModal1() {
    document.getElementsByClassName('modal')[0].style = "opacity: 0; pointer-events: none";
}
function closeModal2() {
    document.getElementsByClassName('modal2')[0].style = "opacity: 0; pointer-events: none";
}
function closeModal3() {
    console.log(777);
    document.getElementsByClassName('modal3')[0].style = "opacity: 0; pointer-events: none";
}

function greySquareHidden() {
    console.log(1111);
    document.getElementById('openModal').style = "opacity: 0";
}

function getModal2() {
    document.getElementsByClassName('modal')[0].style = "opacity: 0; pointer-events: none";
    console.log(3333);
    document.getElementsByClassName('modal2')[0].style = "opacity: 1; pointer-events: auto";    
}

function getMenu() {
    document.getElementsByClassName('modal3')[0].style = "opacity: 1; pointer-events: auto";
}

function getMain() {
    document.getElementsByClassName('modal2')[0].style = "opacity: 0; pointer-events: none";
}

function playVideo() {
    console.log(666);
    let div = document.getElementById('ytplayer')
    //let img = document.getElementById('img-group')
    div.style.display = div.style.display === 'none' ? 'block' : 'none'
    //img.style.display = img.style.display === 'none' ? 'block' : 'none'
    button.innerHTML= button.innerHTML === "ДИВИТИСЬ ВІДЕО" ? "ЗАКРИТИ ВІДЕО" : "ДИВИТИСЬ ВІДЕО"
}