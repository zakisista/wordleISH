import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="absolute-letters">MAIN WORD: _ _ _ _ _</div>
    <div id="output-text"></div>
    <div id="correct-letters"></div>
    <div id="attempts-remaining">Attempts Remaining: </div>
    <input id="input-text">
    <button id="submit">submit</button>
  </div>
`
const wordList = ['hello', 'check', 'flair', 'cloth', 'blood', 'shesh', 'lists']
const usedWords = []

const iterator = [0, 1, 2, 3, 4]
let attemptCount = 0

const currentWord = 'hello'
let currentInput = ''

//2 checks, 1 for exact correctness, 2 for letter correctness excluding exact letters



let submitButton      = document.querySelector(`#submit`)
let input             = document.querySelector(`#input-text`)
let outputText        = document.querySelector(`#output-text`)
let absoluteLetters   = document.querySelector(`#absolute-letters`)
let correctLetters    = document.querySelector(`#correct-letters`)
let attemptsRemaining = document.querySelector(`#attempts-remaining`)

const onSubmit = () => {
  console.log('been clicked')
  const inputContent = input.value

  if (!isValidInput(inputContent)) {
    return
  }
  
  const absoluteIdxList = correctIdx(inputContent)
  const correctLetterIdxList = correctLetter(inputContent, absoluteIdxList)
  
  const correctWord = addAttempt(inputContent, absoluteIdxList, correctLetterIdxList)
  
  if (correctWord) {
    onWin()
  } else if (attemptCount >= 5) {
    onLoss()
  }

  outputText.innerHTML = inputContent.length
  input.value = ''
}

const reset = () => {
  document.querySelector('#app').innerHTML = `
  <div>
    <div id="absolute-letters">MAIN WORD: _ _ _ _ _</div>
    <div id="output-text"></div>
    <div id="correct-letters"></div>
    <div id="attempts-remaining">Attempts Remaining: </div>
    <input id="input-text">
    <button id="submit">submit</button>
  </div>
`
  attemptCount = 0
  
  if(usedWords.length >= 3) {
    usedWords = []
  }
  usedWords.push(currentWord)

  currentWord = getNewWord()
  currentInput = ''
  submitButton      = document.querySelector(`#submit`)
  input             = document.querySelector(`#input-text`)
  outputText        = document.querySelector(`#output-text`)
  absoluteLetters   = document.querySelector(`#absolute-letters`)
  correctLetters    = document.querySelector(`#correct-letters`)
  attemptsRemaining = document.querySelector(`#attempts-remaining`)

  submitButton.addEventListener('click', onSubmit)

}

const getNewWord = () => {
  const newWord = wordList[Math.floor(Math.random()*wordList.length)];
  if(usedWords.includes(newWord)) {
    getNewWord()
  }
  return(newWord)
}

const onLoss = () => {
  console.log('lost')
  document.querySelector('#app').innerHTML = `
  <div>YOU LOSE</div>
  <button id="restart">RETRY</button>
  `
  const retryButton = document.querySelector(`#restart`)
  retryButton.addEventListener('click', reset)

}

const onWin = () => {
  console.log('won')
  console.log('lost')
  document.querySelector('#app').innerHTML = `
  <div>YOU WIN</div>
  <button id="restart">RETRY</button>
  `
  const retryButton = document.querySelector(`#restart`)
  retryButton.addEventListener('click', reset)
}

const addAttempt = (inputContent, absoluteIdxList, correctLetterIdxList) => {
  absoluteLetters.innerHTML = 'MAIN WORD: '
  correctLetters.innerHTML = 'CORRECT LETTERS: '
  
  attemptCount += 1
  currentInput = inputContent.slice()

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
  
  attemptsRemaining.innerHTML = `Attempts Remaining: ${(5 - attemptCount).toString()}`
  

  if (inputContent === currentWord) {
    return true
  } else {
    return false
  }
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


