

const $ = (element) => {
    return document.querySelector(`${element}`)
}

const $All = (element) => {
    return [...document.querySelectorAll(`${element}`)]
}


//How to use 

//Get single HTML element 
const containerClass = $(".container") // Return HTML element 
const containerId = $("#container") // Return HTML element 

//short line
$(".button").classList.add('active')

//Get multiples elements 
const contaierArr = $All(".container") // Return Array 
const contaierArrId = $All('#container') // Return Array 




