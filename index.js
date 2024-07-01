'use strict'
const currentDay = document.querySelector('#current-day')
const currentTime = document.querySelector('#current-time')

window.addEventListener('load', function() {
   this.setInterval(() => {
    const date = new Date();
    const day = date.toUTCString().slice(0,3)
    const time = date.toUTCString().slice(17,25)
    currentDay.textContent = day
    currentTime.textContent = time
   }, 100)
})

// currentDay.textContent = ''
// currentTime.textContent = ''

// const date = new Date()
// console.log(date)