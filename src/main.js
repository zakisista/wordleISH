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

const submitButton = document.querySelector(`#submit`)
const input = document.querySelector(`#input-text`)
const outputText = document.querySelector(`#output-text`)

const onSubmit = () => {
  console.log('been clicked')
  const inputContent = input.value
  console.log(`text content = ${inputContent}`)
}

submitButton.addEventListener('click', onSubmit)


