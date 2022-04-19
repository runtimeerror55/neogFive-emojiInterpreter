let outputContainer = document.querySelector('.output-container')
let input = document.querySelector('.input')
let emojisContainer = document.querySelector('.emojis-Container')

let objectOfEmojis = {
        "😀": "grinnng face",
        "😟": "worried face",
        "🤔": "thinking face",
        "🥺": "pleading face",
        "👐": "open hands",
        "😉": "winking face"

}


function outputEmojiMeaning(outputValue) {
        outputContainer.innerText = objectOfEmojis[outputValue];
}



input.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
                outputEmojiMeaning(input.value)
        }
})
emojisContainer.addEventListener('click', (e) => { outputEmojiMeaning(e.target.innerText) })

