function objectToArray(input) {
    const output = [];
    const keys = Object.keys(input);
    keys.forEach(key => output.push({ [key]: input[key] }))
    return output;
}

function arrayToObject(input) {
    const output = {};
    input.forEach(object => {
        const keys = Object.keys(object);
        output[keys[0]] = object[keys[0]];
    })
    return output;
}

function handshake(n) {
    if (n <= 1) return 0;
    return n - 1 + handshake(n - 1);
}