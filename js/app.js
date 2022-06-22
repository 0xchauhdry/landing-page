// DOM Elements
const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    focuss = document.querySelector('#focus'),
    namee = document.querySelector('#name')

// Show Time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds()

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//add Zero
const addZero = (n) => (parseInt(n, 10) < 10 ? '0' : '')+n

// Set greeting and background
function setGreeting(){
    let today= new Date()
        hour = today.getHours()
    
    if (hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('img/morning.png')"
        greeting.innerHTML = 'Good Morning'
    } else if (hour < 18) {
        //afernoon
        document.body.style.backgroundImage = "url('img/afternoon.png')"
        greeting.innerHTML = 'Good Afternoon'
    } else{
        //evening
        document.body.style.backgroundImage = "url('img/evening.png')"
        greeting.innerHTML = 'Good Evening'
        document.body.style.color= 'white'
    }
}

//Getting Name
function getName () {
    if (localStorage.getItem('name') === null){
        namee.innerHTML = '[Enter Name]'
    }else {
        namee.innerHTML = localStorage.getItem('name')
    }
}

//Setting Name

function setName(e){
    if (e.type === 'keypress'){
        //make sure enter is pressed
        if (e.keycode == 13){
            localStorage.setItem('name', e.target.innerText)
            namee.blur()
        }
    }else{
        localStorage.setItem('name', e.target.innerText)
    }
}

//Getting Name
function getFocus () {
    if (localStorage.getItem('focus') === null){
        focuss.innerHTML = '[Tell us about your focus]'
    }else {
        focuss.innerHTML = localStorage.getItem('focus')
    }
}

// Setting Fcous
function setFocus(e){
    if (e.type === 'keypress'){
        //make sure enter is pressed
        if (e.keycode == 13){
            localStorage.setItem('focus', e.target.innerText)
            focuss.blur()
        }
    }else{
        localStorage.setItem('focus', e.target.innerText)
    }
}

namee.addEventListener('blur', setName)
namee.addEventListener('keypress', setName)
focuss.addEventListener('blur', setFocus)
focuss.addEventListener('keypress', setFocus)

//Run
showTime()
setGreeting()
getName()
getFocus()
setName()
setFocus()

