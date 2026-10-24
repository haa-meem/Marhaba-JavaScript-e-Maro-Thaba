//Page 322-323

//1
const users = new Promise((resolve, reject) => {
  const userName = ["haameem", "shabbir"];
  if (!true) {
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
