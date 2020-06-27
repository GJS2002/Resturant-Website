let employeeDB = [
    {
        'name': 'Joe Rogan',
        'desc': 'Im sure those windmills will keep them cool. I meant physically. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually? There, now hes trapped in a book I wrote: a crummy world of plot holes and spelling errors!',
        'src': './Static/images/JoeRogan.jpg',
        'id': 2,
        
    },
    {
        'name': 'Oriley Autozone',
        'desc': 'I suppose I could part with one and still be feared… Ah, computer dating. Its like pimping, but you rarely have to use the phrase "upside your head." Leela, are you alright? You got wanged on the head.',
        'src': './Static/images/Oriley.jpg',
        'id': 1,
    },
    {
        'name': 'Bill Gates',
        'desc': 'Dont be too proud of this technological terror youve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I cant get involved! Ive got work to do! Its not that I like the Empire, I hate it, but theres nothing I can do about it right now. Its such a long way from here.',
        'src': './Static/images/BillGates.jpg',
        'id': 3,
    },
    {
        'name': 'Keanu reeves',
        'desc': 'Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.',
        'src': './Static/images/Keanu.jpg',
        'id': 4,
    },
];


let donutImg = document.querySelector(".img__donut");
let employeeBtns = document.querySelectorAll(".btn-person");
let employeeInfo = document.querySelector(".info");
let dateText = document.querySelector(".date");


dateText.textContent = new Date().getFullYear();

//Re-sizes image offset to border when page is re-sized 
window.addEventListener('resize', e => {
    let offSet = donutImg.clientHeight / -2;
    document.documentElement.style.setProperty('--imgOffset', `${offSet}px`);
})
//Adds events for each employee button and adds/removes the .active class
employeeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        employeeBtns.forEach(btn => btn.classList.remove("active"));
        let btn = e.currentTarget
        btn.classList.add("active");
        let id = btn.dataset.id;
        displayInfo(id);
    });
});


//Displays information dynamically based on the id and finds the id within the mini employee array
function displayInfo(id){
    let selection = employeeDB.filter(person => {
        if(person.id == id){
            return person;
        }
    });
    let employee = selection[0];
    let html = `<p class="employee__name">${employee.name}</p>
    <div class="employee__desc">
        ${employee.desc}
    </div>
    <img class="employee__img" src="${employee.src}" alt="">`;
    employeeInfo.innerHTML = html;
    
    
}