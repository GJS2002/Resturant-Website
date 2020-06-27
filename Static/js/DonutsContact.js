//Buttons

let tabBtns = document.querySelectorAll(".tab__btn");
let info = document.querySelectorAll(".tab__list");
let btnSubmit = document.querySelector(".btn-submit");
let inputs = document.querySelectorAll(".form__item");
let alert = document.querySelector(".alert");
//Document elements


//Event listeners

//Checks for values in all forms and if there is no value it then displays the alert by removing the hide class
btnSubmit.addEventListener('click', e => {
    let inputArray = [];
    inputs.forEach(input => {
        if(input.value === ''){
            z.push(input);
        }
       
    });
    if(inputArray.length > 0){
        e.preventDefault();
        alert.classList.remove("hide");
    }
});

//Adds click events to tab buttons that display contact information
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
