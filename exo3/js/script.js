let age = [20,5,12,43,98,55];


let sumOfAge = 0;
// calcul de la somme des âges
for (let i = 0; i < age.length; i++) {
    sumOfAge += age[i];
}
console.log(`la sommes des âges est ${sumOfAge}`);


let bigAge = age[0];
//trouvons le plus grand âge
for (let i = 1; i < age.length; i++) {
    if (age[i] > bigAge) {
        bigAge = age[i];
    }
}
console.log(bigAge);