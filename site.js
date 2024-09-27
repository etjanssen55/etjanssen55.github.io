const hours = new Date().getHours() // get the current hour

let isMorning = hours >= 4 && hours < 12 // is it morning?
let isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
let isEvening = hours >= 17 || hours < 4 // is it evening?

// selects the element with id of welcome (the div under the header)
const welcome = document.querySelector('#welcome')

// Returns a message dependent on what time of day it is
if(isMorning == true){
    welcome.textContent = 'Good Morning!'
}

else if (isAfternoon == true){
    welcome.textContent = 'Good Afternoon!'
}

else if (isEvening == true){
    welcome.textContent = 'Good Evening!'
}

else{
    welcome.textContent = 'What year is it?!'
}

console.log(hours.toString())


// Creating a secret message in local storage
const key = `It's a secret to everybody.`

localStorage.setItem(key, 'Hey! Listen!')