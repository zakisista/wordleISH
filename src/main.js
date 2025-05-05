import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="absolute-letters"></div>
    <div id="output-text"></div>
    <div id="correct-letters"></div>
    <div id="attempts-remaining"></div>
    <input id="input-text">
    <button id="submit">submit</button>
  </div>
`

const iterator = [0, 1, 2, 3, 4]
let attemptCount = 0

const currentWord = 'hello'

//2 checks, 1 for exact correctness, 2 for letter correctness excluding exact letters



const submitButton      = document.querySelector(`#submit`)
const input             = document.querySelector(`#input-text`)
const outputText        = document.querySelector(`#output-text`)
const absoluteLetters   = document.querySelector(`#absolute-letters`)
const correctLetters    = document.querySelector(`#correct-letters`)
const attemptsRemaining = document.querySelector(`#attempts-remaining`)

const onSubmit = () => {
  console.log('been clicked')
  const inputContent = input.value

  if (!isValidInput(inputContent)) {
    return
  }
  
  const absoluteIdxList = correctIdx(inputContent)
  const correctLetterIdxList = correctLetter(inputContent, absoluteIdxList)
  
  addAttempt(inputContent, absoluteIdxList, correctLetterIdxList)

  outputText.innerHTML = inputContent.length
  input.value = ''
}

const addAttempt = (inputContent, absoluteIdxList, correctLetterIdxList) => {
  absoluteLetters.innerHTML = 'MAIN WORD: '
  correctLetters.innerHTML = 'CORRECT LETTERS: '
  
  attemptCount += 1

  iterator.forEach((idx) => {
    if(!absoluteIdxList.includes(idx)) {
      absoluteLetters.insertAdjacentHTML('beforeend', `_ `)
    } else {
      absoluteLetters.insertAdjacentHTML('beforeend', `${inputContent.slice(idx, idx+1)} `)
    }
  })
  
  correctLetterIdxList.forEach((letter) => {
    correctLetters.insertAdjacentHTML('beforeend', `${letter}, `)
  })
  
  attemptsRemaining.innerHTML = `Attempts Remaining: ${(6 - attemptCount).toString()}`
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


