// Mellanslag mellan varje
let str1 = ''
for (let i = 0; i < 10; i++) {
    str1 = str1 + '* '
}

console.log(str1)

// Upp och nedvänd triangel
let str2 = ''
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        str2 = str2 + '*'
    }
    str2 = str2 + '\n'
}

console.log(str2)

// Kvadrat
let str3 = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        str3 = str3 + '* '
    }
    str3 = str3 + '\n' 
}

console.log(str3)

// Romb
let str4 = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        str4 = str4 + ' * '
    }
    str4 = str4 + '\n'
    for (let j = 0; j < i + 1; j++) {
        str4 = str4 + ' '
    }
}

console.log(str4) 



// Pyramid
let str5 = ''
for (let i = 1; i <= 5; i++) {
    str5 += ' '.repeat(5 - i);
    str5 += '*'.repeat(i * 2 - 1)
    str5 += '\n'
}

console.log(str5)