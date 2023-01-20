function arrayToObject(input) {
    const output = {};
    input.forEach(object => {
        const keys = Object.keys(object);
        output[keys[0]] = object[keys[0]];
    })
    return output;
}

const Input = [{ a: 1 }, { b: 2 }, { c: 3 }];
console.log(`Input:`); console.log(Input);
console.log(`Output:`); console.log(arrayToObject(Input));