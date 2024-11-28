const result = (n) =>{
    return n % 2 === 0 ? "Pari" : "Dispari" 
}

console.log(result(process.argv[2]));
