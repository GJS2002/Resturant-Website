//Buttons

let tabBtns = document.querySelectorAll(".tab__btn");
let info = document.querySelectorAll(".tab__list");
let btnSubmit = document.querySelector(".btn-submit");
let inputs = document.querySelectorAll(".form__item");
let alert = document.querySelector(".alert");
//Document elements


//Event listeners
btnSubmit.addEventListener('click', e => {
    let z = [];
    let check = inputs.forEach(input => {
        console.log(input.value);
        if(input.value === ''){
            z.push(input);
        }
       
    });
    if(z.length > 0){
        e.preventDefault();
        alert.classList.remove("hide");
    }
});


tabBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        let btn = e.currentTarget;
        let id = btn.dataset.id;
        tabBtns.forEach(btn => {btn.classList.remove("active");});
        btn.classList.add("active");
        info.forEach(e => {e.classList.add("hide");});
        document.querySelector(`.${id}`).classList.remove("hide");
        
    });
});
