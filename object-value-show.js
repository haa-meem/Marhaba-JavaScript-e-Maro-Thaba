//Page 131

//1
const player = {
    name: "Lionel Andrés Messi",
    nationality: "Argentine",
    dateOfBirth: "June 24, 1987",
    age: 37,
    height: "1.70 m (5 ft 7 in)",
    position: "Forward",
    currentTeam: {
        name: "Inter Miami CF",
        league: "Major League Soccer (MLS)",
        jerseyNumber: 10
    },
    careerHighlights: {
        clubGoals: 672, // For Barcelona
        internationalGoals: 112, // For Argentina
        BallonDorWins: 8,
        FIFAWorldCupWins: 1, // 2022 Qatar
        CopaAmericaWins: 2, // 2021 Brazil, 2024 United States
        totalTrophies: 45
    },
    achievements: [
        "Most goals in a calendar year (91)",
        "Most assists in Copa América (18)",
        "Most international appearances by a South American male (191)"
    ],
    marketValue: "€20 million",
    socialMedia: {
        website: "messi.com"
    }
};
console.log(player.currentTeam.name);

//2
const laptop = {
    brand: "ASUS",
    model: "TUF Gaming F15 FX507ZC",
    processor: "12th Gen Intel Core i7-12700H (24M Cache, up to 4.7 GHz, 14 cores)",
    graphics: "NVIDIA GeForce RTX 3050 Laptop GPU with 4GB GDDR6",
    screenSize: "15.6-inch",
    ram: "16GB DDR5 RAM",
    hardDisc: false,
    ssd: "512GB SSD (NVMe PCIe)",
    battery: "4-cell 56Wh",
    weight: "2.2 kg",
    operatingSystem: "Windows 11 Home",
    price: 180000
};
console.log(laptop.screenSize);

//3
const favPlace = {
    name: "Cox's Bazar",
    distance: "400km",
    popularity: "high"
}
console.log(favPlace["popularity"]);

//4
const phone = {
    brand: "Nokia",
    color: "black",
    price: 5000
}
console.log(phone["price"]);

//5
const library = {
    name: "Public Library",
    location: "Dhaka",
    books: 5000
}
console.log(library.location);

//6
const movie = {
    title: "Inception",
    director: "Nolan",
    rating: 9
}
console.log(movie['rating']);

//7
const college = {
    name: "ndc",
    establlished: 1949,
    groups: ["Science", "Arts", "Commerce"]
}
console.log(college.groups[1]);

//8
const family = {
    father: {
        name: "MD. ABDUL ALIM",
        age: 57,
        profession: "Government Employee"
    },
    mother: {
        name: "MST. HOSNE ARA",
        age: 52,
        profession: "Housewife"
    }
}
console.log(family.mother.age);
console.log(family.father.age);
console.log(family.father.age + family.mother.age);