import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

//váriaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')



form.onsubmit = event => {

    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {

        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    
    displayResultMessage(result)
    
}

function displayResultMessage(result) {

    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
   // modalWrapper.classList.add('open')
    Modal.open()

}


/*

3 maneiras de criar e atribuir função a um evento

form.onsubmit = function(){}

form.onsubmit = () => {}

form. onsubmit = handleSubmit

function handleSubmit () {}
*/