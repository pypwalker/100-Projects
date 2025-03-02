const textInput = document.querySelector('.text-input');
const wordCountElement = document.querySelector('.word-count')
const letterCountElement = document.querySelector('.letter-count')
const spaceCountElement = document.querySelector('.space-count')


const checks = [ atleastTwoCharacters, absentThreeConsecutiveCharacters ];

function atleastTwoCharacters(text) {
    const letters = text.match(/[a-z]/gi) || []
    return letters.length >= 2;
}

function absentThreeConsecutiveCharacters(text) {
    for (const char of text) {
        const occurrences = Array.from(text).filter(v => v == char).length;

        if (occurrences >= 3) {
            return false;
        }
    }

    return true;
}

textInput.addEventListener('input', () => {
    const splitted = textInput.value.trim().split(/[\s-]/)
    let wordCount = 0;
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length; 
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;

    outer: for (const text of splitted) {
        for (const check of checks) {
            if (!check(text)) {
                continue outer;
            }
        }
        // if (!absentThreeConsecutiveCharacters(text)) {
        //     continue outer;
        // } else if (!absentThreeConsecutiveCharacters(text)) {
        //     continue outer;
        // }
        wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount
});