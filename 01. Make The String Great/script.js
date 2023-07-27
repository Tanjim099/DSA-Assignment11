function makeGood(s) {
    const stack = [];

    for (const char of s) {
        if (
            stack.length &&
            Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32
        ) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

const s = "leEeetcode";
console.log(makeGood(s))