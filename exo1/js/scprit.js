let numbers = [123, 8409, 100053, 333333333, 7]


for (let i = 0; i < numbers.length; i++) {
    // calcul du modulo
    modulo = numbers[i] % 3
    if ( modulo === 0) {
        console.log(`${numbers[i]} est divisible par 3`);
    } else {
        console.log(`${numbers[i]} n'est pas divisible par 3`);
    }
}