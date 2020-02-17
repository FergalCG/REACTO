function balancedBrackets(str) {
    let stack = [],
        pairs = {
            '[' : ']',
            '(' : ')',
            '{' : '}'
        }
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '[' || str[i] === '(' || str[i] === '{') {
            stack.push(str[i])
        }else if(str[i] === ']' || str[i] === ')' || str[i] === '}') {
            if(pairs[stack[stack.length-1]] === str[i]) {
                stack.pop()
            }else {
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(balancedBrackets('[][(){}')) // false
console.log(balancedBrackets('({)}')) // false
console.log(balancedBrackets('({[]})')) // true
console.log(balancedBrackets('text ( is allowed ){rwwrwrrww [] ()}')) // true