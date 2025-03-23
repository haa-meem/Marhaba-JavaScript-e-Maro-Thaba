//Page 122

//1
for (let n = 1; n <= 30; n++) {
    console.log(n);
    if (n >= 15) {
        break;
    }
}

//2
for (let n = 1; n <= 40; n++) {
    if (n % 7 == 0) {
        continue;
    }
    console.log(n);
}

//3
for (let n = 1; n <= 15; n++) {
    if (n == 9) {
        continue;
    }
    console.log(n);
}

//4
for (let n = 1; n <= 20; n++) {
    if (n == 12) {
        continue;
    }
    console.log(n);
}

//5
for (let n = 1; n <= 25; n++) {
    if (n % 3 == 0) {
        continue;
    }
    console.log(n);
}

//6
for (let n = 91; n <= 120; n++) {
    console.log(n);
    if (n % 10 == 0) {
        break;
    }
}