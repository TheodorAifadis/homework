// Skriv en while loop
// Som varje iteration (repetition) slumpar ett heltal mellan 0 och 10
// Om talet blir 6, avsluta loopen

let x = Math.floor(Math.random() * 10) + 1
while (x !=6) {
    console.log(x)
    x = Math.floor(Math.random() * 10) + 1
}

// jag loggar ut x för att se siffran 6 i slutet
console.log(x)

// Exempel på output:
// 4
// 7
// 3
// 8
// 4
// 1
// 1
// 6
