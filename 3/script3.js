const result = (words) =>{
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < vowels.length; j++){
            vowels[j] === words[i] && count++
        }
    }
    return count
}

console.log(result(process.argv[2]));

// L'argomento va scritto tra virgolette
