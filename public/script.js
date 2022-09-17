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
    if (!formValidate(form)) {
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