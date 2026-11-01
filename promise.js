//Page 322-323

//1
const users = new Promise((resolve, reject) => {
  const userName = ["haameem", "shabbir"];
  if (userName.length > 0) {
    resolve(userName);
  } else {
    reject("No user data");
  }
});
users
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  });

//2
const payment = new Promise((resolve, reject) => {
  const amount = 130;
  if (amount > 0) {
    resolve(amount);
  } else {
    reject("No payment received");
  }
});

payment
  .then((pay) => {
    console.log(pay);
  })
  .catch((error) => {
    console.log(error);
  });

//3
const sendEmail = (email) => {
  validEmail = ["haameemalhamra@gmail.com", "alhamrahaameem@gmail.com"];
  const checkPromise = new Promise((resolve, reject) => {
    if (validEmail.includes(email)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
  checkPromise
    .then((avaiable) => {
      console.log("Avaiable");
    })
    .catch((error) => {
      console.log("Not available");
    });
};

sendEmail("haameemalhamra");
