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


// Assignment 5 - Carousel

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const previous = document.querySelector('#prev')
const next = document.querySelector('#next')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

previous.addEventListener('click', () => {
    currentImage--
    showImages()
})

next.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)