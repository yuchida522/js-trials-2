"use strict";


// 1. isHometown
function isHometown(town) {
    return town === 'San Francisco';
}
// > isHometown('San Francisco')
// true
// > isHometown('Chicago')
// false



// 2. getFullName
function getFullName(first, last) {
    return `${first} ${last}`;
}
// > getFullName('Yuri', 'Uchida')
// 'Yuri Uchida'



// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {
    const subtotal = basePrice * (1 + tax);
    let fee = 0
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee;
}
// > calculateTotal(10, 'CA')
// 10.815
// > calculateTotal(10, 'PA')
// 12.5
// > calculateTotal(10, 'MA')
// 11.5
// > calculateTotal(110, 'MA')
// 118.5
// > calculateTotal(10, 'IL')
// 10.5