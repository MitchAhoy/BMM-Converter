// Get textareas
const inputTextarea = document.querySelector('#input')
const outputTextarea = document.querySelector('#output')

// Get user input from textarea
let userInput = []
let splitInput = []
let bmmWords = ''
let outputWords = ''

const transformWords = (input) => {
    splitInput = [input.split(' ')]
    splitInput.forEach(function(word) {
        bmmWords = `+${word}`
    })
    outputWords = bmmWords.split(',').join(' +')
    outputWords.split('↵').join(`+`)
    outputTextarea.value = outputWords.split(/\n/).join(`\n+`)

    if (outputWords === '+') {
        outputTextarea.value = ''
    }
}

inputTextarea.addEventListener('input', function(e) {
    userInput = e.target.value
    transformWords(userInput)
    
})


