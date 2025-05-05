import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="output-text"></div>
    <input id="input-text">
    <button id="submit">submit</button>
  </div>
`
const attemptCount = 0

const currentWord = 'hello'

//2 checks, 1 for exact correctness, 2 for letter correctness excluding exact letters

const submitButton = document.querySelector(`#submit`)
const input        = document.querySelector(`#input-text`)
const outputText   = document.querySelector(`#output-text`)

const onSubmit = () => {
  console.log('been clicked')
  const inputContent = input.value

  if (!isValidInput(inputContent)) {
    return
  }
  for (let i=0; i<inputContent.length; i++) {
    console.log(inputContent.slice(i, i+1))
  }
  outputText.innerHTML = inputContent.length
  input.value = ''
}

const isValidInput = (inputText) => {
  if (inputText === '') {
    console.log('invalid input')
    return false
  }
  if (inputText.length > 5) {
    console.log('invalid input')
    return false
  }
  return true
}


submitButton.addEventListener('click', onSubmit)


