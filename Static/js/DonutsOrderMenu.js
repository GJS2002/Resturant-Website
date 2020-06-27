//Database
let menuItems = [
    {
        'name': 'item1',
        'price': 3,
        'stock': 4,
        'desc': 'Do a flip! But I know you in the future. I cleaned your poop. Hey, guess what youre accessories to. A sexy mistake. I am the man with no name, Zapp Brannigan! In our darkest hour, we can stand erect, with proud upthrust bosoms.'

    },
    {
        'name': 'item2',
        'price': 5,
        'stock': 3,
        'desc': 'Im sure those windmills will keep them cool. I meant physically. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually? There, now hes trapped in a book I wrote: a crummy world of plot holes and spelling errors!'

    },
    {
        'name': 'item3',
        'price': 1,
        'stock': 6,
        'desc': 'I suppose I could part with one and still be feared… Ah, computer dating. Its like pimping, but you rarely have to use the phrase "upside your head." Leela, are you alright? You got wanged on the head.'

    },
    {
        'name': 'item4',
        'price': 6,
        'stock': 2,
        'desc': 'Dont be too proud of this technological terror youve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I cant get involved! Ive got work to do! Its not that I like the Empire, I hate it, but theres nothing I can do about it right now. Its such a long way from here.'

    },
    {
        'name': 'item5',
        'price': 10,
        'stock': 7,
        'desc': 'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding.'

    },
    {
        'name': 'item6',
        'price': 8,
        'stock': 3,
        'desc': 'Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.'

    },
    {
        'name': 'item7',
        'price': 5,
        'stock': 2,
        'desc': 'Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters slippers kitty power ignore the squirrels, youll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then dont bite off humans toes.'

    },
    {
        'name': 'item8',
        'price': 15,
        'stock': 9,
        'desc': 'Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.'

    },
    {
        'name': 'item9',
        'price': 12,
        'stock': 5,
        'desc': 'You know i thought that it would be hilarious if i would leave a funny message here because even though this is on my portfolio i would like to make you laugh if youre even reading this, but too bad i dont have anything funny to say, all i can tell you is that im a great front end web developer. this is not a shameless plug by the way'

    },
]
//Buttons
let cartCloseBtn = document.querySelector(".close-cart");
let openCart = document.querySelector(".btn-cart");
//Document elements
let alert = document.querySelector(".alert");
let modal = document.querySelector(".modal");
let menu = document.querySelector(".menu");
let cart = document.querySelector(".cart");
let cartList = document.querySelector(".checkout-items");
let total = document.querySelector(".total");
let clearCart = document.querySelector(".clear-cart");
let html = document.querySelector("html");
let menuCode = html.innerHTML;
//Other variables
let eventsAdded = false;
let selected = false;

//Event listeners
window.addEventListener('load', displayItems);
window.addEventListener('load', showLocalStorage);
window.addEventListener('mousemove', setSize);

clearCart.addEventListener('click', e => {
    cartList.innerHTML = '';
    document.querySelector(".total").textContent = '0';
    displayAlert('Cart Cleared');
    if(cartList.childNodes.length === 0){
        eventsAdded = false;
    }
    clearLocalStorage();
});

cartCloseBtn.addEventListener('click', _ => {
    cart.style.height = '0%';
});

openCart.addEventListener('click', _ => {
    cart.style.height = '100%';
    
});


function setSize(){
    let images = document.querySelectorAll(".menu-img");

    images.forEach(img => {
        let imgHeight = img.getBoundingClientRect().height;
        let imgCover = img.previousElementSibling;
        imgCover.style.height = `${imgHeight}px`;

    });
}

function displayItems(){
    menuItems.forEach(item => {
        let name = item.name;
        let price = item.price;
        let stock = item.stock;
        let menuHtml = `<div class="${name}" data-price="${price}" data-stock="${stock}">
        <div class="img">
            <div class="img-cover">
                <div class="btn-div">
                    <button class="btn btn-addToCart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>	
                    <button class="btn btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </div>  				
            </div>
            <img class="menu-img" src="./Static/images/${name}.jpg" alt="">
        </div>
    </div>`;
    menu.innerHTML += menuHtml;
    });
    let images = document.querySelectorAll(".menu-img");
    let modalBtns = document.querySelectorAll(".btn-search");
    let addItemBtn = document.querySelectorAll(".btn-addToCart");
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        images.forEach(img => {
            let imgCover = img.previousElementSibling;
            imgCover.classList.add("hide");
            imgCover.style.opacity = '1';
            img.addEventListener('click', e => {
                
                images.forEach(img => {
                    if(img.previousElementSibling === imgCover){
                        img.previousElementSibling.classList.remove("hide");
                    } else{
                        img.previousElementSibling.classList.add("hide");
    
                    }          
                });
                
            });
        });
    }
       
        //On click hide all other image btn divs

        
        

    addItemBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            let btn = e.currentTarget;
            let div = btn.parentElement.parentElement.parentElement.parentElement;
            let price = div.dataset.price;
            let stock = div.dataset.stock;
            let name = div.className;
            let amount = 1;
            addToCart(name, price, stock, amount);
        })
    })
    modalBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            let btn = e.currentTarget;
            let div = btn.parentElement.parentElement.parentElement.parentElement; 
            let selection = menuItems.filter(item => {
                if(div.className === item.name){        
                    return item;
                }
            });
            let selectedItem = selection[0];
            let modalHtml = `<div class="img-modal">
            <img src="./Static/images/${selectedItem.name}.jpg" alt="">
            </div>
            <button class="btn close-modal">
                <i class="fas fa-times"></i>
            </button>
            <p class="price">${selectedItem.name}, $${selectedItem.price}.00, ${selectedItem.stock} in stock</p>
            <p class="desc">${selectedItem.desc}</p>`;
            
            modal.innerHTML = modalHtml;
            modal.classList.remove("hide");
            
            let modalCloseBtn = document.querySelector(".close-modal");
            modalCloseBtn.addEventListener('click', _ => {
                modal.classList.add("hide");
            });
        });
    });
}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayAlert(string){
    alert.classList.remove("hide");
    alert.textContent = string;
    await wait(2000);
    alert.classList.add("hide");
}

function addToCart(name, price, stock, amount){
    let theCode = `<li class="cart-item" data-id="${name}" data-stock="${stock}">
    <div class="item-info">
        <div class="img-item">
        <img src="./Static/images/${name}.jpg" alt="">
        </div>
        <div class="info">
            <p class="name">${name}</p>
            <p class="price-tag">$<span>${price}</span>.00</p>
            <button class="btn btn-remove">
                <p>remove</p>
            </button>
        </div>
    </div>
    <div id="amount">
		<button class="btn increase">
			<i class="fas fa-chevron-up"></i>
		</button>
		<p class="item-amount">${amount}</p>
		<button class="btn decrease">
			<i class="fas fa-chevron-down"></i>
		</button>
	</div>
    
</li>`;
    let listItems = cartList.childNodes;
    
    if(listItems.length === 0){
        cartList.innerHTML += theCode;
        displayAlert('Item Added To Cart!');
        total.textContent = price;
        let amount = cartList.childNodes[0].childNodes[3].childNodes[3].textContent;
        addToLocalStorage(name, amount, price, stock);
    }
    else { 
       let selectedItem; 
       listItems.forEach(item => {
            if(item.dataset.id === name){
                selectedItem = item;
            }
        });    
        if(selectedItem === undefined){
            cartList.innerHTML += theCode;
            displayAlert('Item Added To Cart!');
            increasePrice(price);
            addEvents();
            let amount = cartList.childNodes[0].childNodes[3].childNodes[3].textContent;
            addToLocalStorage(name, amount, price, stock);
        } else {
            let amount = selectedItem.childNodes[3].childNodes[3];        
            let value = parseFloat(amount.textContent);
            if(value === parseFloat(stock)){
                displayAlert('Item Out Of Stock!');
            } else {
                displayAlert('Item Amount Increased!');
                value += 1; 
                editAmountInStorage(selectedItem.dataset.id, value);
                amount.textContent = value.toString();
                increasePrice(price);

            }
            
        }
    }  

    if(cartList.childNodes.length === 1 && !eventsAdded){
        addEvents();
        eventsAdded = true;
    }

    
    
}

function addEvents(){
    let increaseBtns = document.querySelectorAll(".increase");
    let decreaseBtns = document.querySelectorAll(".decrease");
    let removeBtns = document.querySelectorAll(".btn-remove");
        increaseBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                let button = e.currentTarget;
                let amount = button.nextElementSibling;
                let amountNum = parseFloat(amount.textContent);
                let info = button.parentElement.previousElementSibling;
                let itemName = info.childNodes[3].childNodes[1].textContent;
                let price = info.childNodes[3].childNodes[3].childNodes[1].textContent;
                let stock = parseFloat(info.parentElement.dataset.stock);
                if(amountNum >= stock){
                    amountNum = stock;
                    displayAlert('Item Out Of Stock!');
                } else {
                    amountNum += 1;    
                    amount.textContent = amountNum.toString();
                    increasePrice(parseFloat(price));
                    editAmountInStorage(itemName, amountNum);
                }
                
            });
        });
        decreaseBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                    let button = e.currentTarget;
                    let amount = button.previousElementSibling;
                    let amountNum = parseFloat(amount.textContent);
                    let info = button.parentElement.previousElementSibling;
                    let itemName = info.childNodes[3].childNodes[1].textContent;
                    let price = info.childNodes[3].childNodes[3].childNodes [1].textContent; 
                    amountNum -= 1;
                    amount.textContent = amountNum.toString();
                    console.log(itemName);
                    
                    editAmountInStorage(itemName, amountNum); 

                    decreasePrice(parseFloat(price));
                    if(amountNum <= 0){
                        info.parentElement.remove();
                        removeFromLocalStorage(itemName);
                    }     
                });
                
            });
    removeBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            let cartTotal = document.querySelector(".total");
            let btn = e.currentTarget;
            let item = btn.parentElement.parentElement.parentElement;
            item.remove()            
            let amount = parseFloat(item.childNodes[3].childNodes[3].textContent);
            let itemPrice = parseFloat(item.childNodes[1].childNodes[3].childNodes[3].childNodes[1].textContent);
            let itemName = item.childNodes[1].childNodes[3].childNodes[1].textContent;
            removeFromLocalStorage(itemName);
            
            if(cartList.childNodes.length === 0){
                cartTotal.textContent = '0';
                eventsAdded = false;
            } else {
                let itemTotal = amount * itemPrice;
                let newTotal = parseFloat(cartTotal.textContent); itemTotal;
                cartTotal.textContent = newTotal;
                
            }
            displayAlert('Item removed');
        })
    });
}

function increasePrice(price){
    let currentPrice = parseFloat(total.textContent);
    let newPrice = currentPrice + parseFloat(price);
    total.textContent = newPrice;
}

function decreasePrice(price){
    let currentPrice = parseFloat(total.textContent);
    let newPrice = currentPrice - parseFloat(price)
    if(newPrice === 0){
        eventsAdded = false;
    }
    total.textContent = newPrice;
    
    
}


function removeFromLocalStorage(name){
    let theCart = getLocalStorage('cart');
    let items = theCart.filter(item => {
        if(item.name !== name){
            return item;
        }
    });
    localStorage.setItem('cart', JSON.stringify(items));
}

function editAmountInStorage(itemName, value){
    let theCart = getLocalStorage('cart');
    let items = theCart.filter(item => {
        if(item.name === itemName){        
           item.amount = value.toString();
        }
        return item;
        
    });
    localStorage.setItem('cart', JSON.stringify(items));
}

function addToLocalStorage(name, amount, price, stock){
    let cartItem = {name, amount, price, stock};
    let theCart = getLocalStorage('cart');
    theCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(theCart));
}

function getLocalStorage(item){
    let s = localStorage.getItem(item)?JSON.parse(localStorage.getItem(item)) : [];
    return s;
}

function clearLocalStorage(){
    let theCart = getLocalStorage('cart');
    console.log(theCart);
    theCart.length = 0;
    localStorage.setItem('cart', theCart);
}

function showLocalStorage(){
    let theCart = getLocalStorage('cart');
    theCart.forEach(item => {
        let html = `<li class="cart-item" data-id="${item.name}" data-stock="${item.stock}">
    <div class="item-info">
        <div class="img-item">
        <img src="./Static/images/${item.name}.jpg" alt="">
        </div>
        <div class="info">
            <p class="name">${item.name}</p>
            <p class="price-tag">$<span>${item.price}</span>.00</p>
            <button class="btn btn-remove">
                <p>remove</p>
            </button>
        </div>
    </div>
    <div id="amount">
		<button class="btn increase">
			<i class="fas fa-chevron-up"></i>
		</button>
		<p class="item-amount">${item.amount}</p>
		<button class="btn decrease">
			<i class="fas fa-chevron-down"></i>
		</button>
	</div>
    
</li>`
        cartList.innerHTML += html;
        let total = item.amount * item.price;
        increasePrice(total);
        addEvents();

    });
}