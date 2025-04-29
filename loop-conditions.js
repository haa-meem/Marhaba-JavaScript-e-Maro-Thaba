//Page 119

//1
for (let n = 20; n <= 50; n++) {
    if (n % 7 == 0) {
        console.log(n);
    }
}

//2
for (let n = 40; n <= 80; n++) {
    if (n % 5 == 0 && n % 7 == 0) {
        console.log(n);
    }
}

//3
let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 13 == 0) {
        console.log(i);
        sum += i;
    }
}
console.log('Sum:', sum);

//4
for (let n = 1; n <= 50; n += 4) {
    console.log(n);
}

//5
for (let n = 0; n <= 100; n++) {
    if (n % 9 == 0 && n % 6 == 0) {
        console.log(n);
    }
}

//6
for (let n = 1; n <= 50; n++) {
    if (n % 3 == 0 && n % 4 == 0) {
        console.log(n);
    }
}