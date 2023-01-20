function handshake(n) {
    if (n <= 1) return 0;
    return n - 1 + handshake(n - 1);
}
const n=2;
console.log(`If there are ${n} people in the room number of handshakes will be ${handshake(n)} `)