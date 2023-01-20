function objectToArray(input) {
    const output = [];
    const keys = Object.keys(input);
    keys.forEach(key => output.push({ [key]: input[key] }))
    return output;
}

const Input = { a: 1, b: 2, c: 3 }
console.log(`Input:`); console.log(Input);
console.log(`Output:`); console.log(objectToArray(Input));