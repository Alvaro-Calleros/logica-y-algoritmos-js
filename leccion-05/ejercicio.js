function findLongestWord(text) {
    const words = text.split(' '); 
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const text = "JavaScript es un lenguaje de programacion increíble para aprender.";
console.log(findLongestWord(text)); // "programacion"
