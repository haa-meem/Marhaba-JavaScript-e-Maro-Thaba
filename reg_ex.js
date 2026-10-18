//Page 290

//1
const sentence = "I bought an orange";
console.log(sentence.replace(/orange/, "grape"));

//2
const newSentence = "I like to have apple and banana";
console.log(/ana/.test(newSentence));

//3
const bigSentence = "I am eating apple. apple is good. apple helps me a lot";
console.log(bigSentence.replace(/apple/g, "JavaScript"));
