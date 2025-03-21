//Page 86

//1
haveMoney = 900;
invitation = true;
if (invitation == true) {
    console.log("I'll attend to his birthday party");
    if (haveMoney > 1000) {
        console.log("and buy a gift for him");
    } else {
        console.log("empty-handed");
    }
} else {
    console.log("I'll unfriend him");
}

//2
const wantsTea = true, wantsBiscuits = false;
if (wantsTea == true) {
    if (wantsBiscuits == true) {
        console.log("Cha Biscuits Ready");
    } else {
        console.log("Shudhu Cha Ready");
    }
} else {
    console.log("Boshe boshe Star Jolsha dekhun");
}

//3
const activeAccount = true, premiumSubscription = false;
if (activeAccount == true) {
    if (premiumSubscription == true) {
        console.log("Watch Premium features");
    } else {
        console.log("Free version dekhun");
    }
} else {
    console.log("The account is not activated");
}

//4
const isFoodInFreezer = false, foodDeliveryApp = false;
if (isFoodInFreezer == true) {
    console.log("I'll heat up the food");
} else {
    if (foodDeliveryApp == true) {
        console.log("I'll order food from the Food Delivery app");
    } else {
        console.log("Ajke ami Roza");
    }
}

//5
const guestCount = 111, allBringGift = true;
if (guestCount > 100) {
    if (allBringGift == true) {
        console.log("Let's party all night");
    } else {
        console.log("I'll party with myself");
    }
} else {
    console.log("More than 100 people will not attend the party");
}