import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="output-text"></div>
    <div id="correct-letters"></div>
    <div id="absolute-letters"></div>
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
  
  const absoluteIdxList = correctIdx(inputContent)
  const correctLetterIdxList = correctLetter(inputContent, correctIdxList)

  outputText.innerHTML = inputContent.length
  input.value = ''
}

const correctLetter = (inputContent, correctIdxList) => {
  const correctLetterList = []
  const correctLetterIdxList = []
  for (let i=0; i<inputContent.length; i++) {
    console.log(`${inputContent.slice(i, i+1)}, ${currentWord.slice(i, i+1)}`)
    const inputLetter = inputContent.slice(i, i+1)
    if(!correctIdxList.includes(i)) {
      for (let y=0; y<inputContent.length; y++) {
        if(!correctIdxList.includes(y)) {
          if (inputLetter === currentWord.slice(y, y+1)) {
            correctLetterList.push(inputLetter)
            correctLetterIdxList.push(i)
            break
          }
        }
      }
    }
  }
  
  console.log(`correctLetterList: ${correctLetterList}`)
  console.log(`correctLetterIDXList: ${correctLetterIdxList}`)
  return correctLetterList
}

const correctIdx = (inputContent) => {
  const correctIdxList = []
  for (let i=0; i<inputContent.length; i++) {
    console.log(`${inputContent.slice(i, i+1)}, ${currentWord.slice(i, i+1)}`)
    if (inputContent.slice(i, i+1) === currentWord.slice(i, i+1)) {
      correctIdxList.push(i)
    }
  }
  
  console.log(`correctIdxList: ${correctIdxList}`)
  return correctIdxList
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


