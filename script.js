

function modeChange(){
    let body = document.querySelector('body');
    let dugme = document.querySelector('.dark-theme button');

    let btn = document.querySelector('#btn');
    let input = document.querySelector('#add-task');

    if(dugme.className == 'nije-aktivno'){
        dugme.classList.remove('nije-aktivno');
        dugme.classList.add('aktivno');
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        btn.style.border = '1px solid white';
        btn.style.color = 'white';
        input.style.backgroundColor = 'black';
        input.style.border = '1px solid white';
        input.style.color = 'white';
    }else{
        dugme.classList.remove('aktivno');
        dugme.classList.add('nije-aktivno');
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        btn.style.border = '1px solid black';
        btn.style.color = 'black';
        input.style.backgroundColor = 'white';
        input.style.border = '1px solid black';
        input.style.color = 'black';
    }
}

function AddTask(){
    let input = document.querySelector('#add-task');
    let ol_list = document.querySelector('#ol');
  
    if(input.value.length > 0){
        ol_list.innerHTML += `<li><p class="name">${input.value}</p>
        <button onclick="precrtaj(this)" class="nije-kliknuto">Reseno</button>
        <button onclick="remove(this)">Ukloni</button>
        </li>`;
        input.value = '';
    }
}

function remove(element){
    let li_list = element.closest('li');
    li_list.remove();
}

function precrtaj(element){
    let li_list = element.closest('li');
    let element_p = li_list.querySelector('.name');

    if(element.className == 'nije-kliknuto'){
        element_p.style.textDecoration = 'line-through';
        element.classList.add('kliknuto');
        element.classList.remove('nije-kliknuto');   
    }else{
        element_p.style.textDecoration = 'none';
        element.classList.remove('kliknuto');   
        element.classList.add('nije-kliknuto');
    }
}