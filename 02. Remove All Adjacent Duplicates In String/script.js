function removeDuplicates(s) {
    const stack = [];

    for (const char of s) {
        if (stack.length && char === stack[stack.length - 1]) {

            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

const s = "abbaca";
console.log(removeDuplicates(s))