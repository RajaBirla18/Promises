// const promiseOne = new Promise(function (resolve, reject) {
//   // Do the async task
//   // DB calls, cryptography, network

//   setTimeout(function () {
//     console.log("async task completed");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("async task_2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise 2 consumed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         resolve( {username : "chai", email: "chai@example.com"})
//     },1000)
// });

// promiseThree.then( function(user){
//     console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Raja", password: "1234" });
//     } else {
//       reject("ERROR: something went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally( ()=> console.log("A promise either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "JavaScrit", password: "1234" });
      } else {
        reject("ERROR: JS went wrong");
      }
    }, 1000);
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promiseFive;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  consumePromiseFive();
  
  // async function getAllUsers (){
  //     try{
  //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //         // console.log(response);
  //         const data = await response.json();
  //         console.log(data);
  //     } catch (error){
  //         console.log("E", error);
  //     }
  // }
  // getAllUsers()
  
  fetch('https://api.github.com/users/rajabirla')
  
  .then( (data) => { return data.json()})
  
  .then( (data) => console.log(data))
  
  .catch( (error) => console.log(error));