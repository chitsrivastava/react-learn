//This was ran online

const push = require("web-push");

//This generates the public and private VapID keys (One time process so that to hand out the public key to user)
//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys)

//Generated from above function (No need to generate again)
let vapidKeys = {
  publicKey:
    "BBmraJAu9t-4VyQ6TO0hGuAr9_c8OrPz77CSwaSc96i29MZ6WtCJBf-uyQGnOrCC8qvc8f7NXfnsHI2EnD08MQc",
  privateKey: "8OyK4CyW8polj_gwJLICSlhBv_3mQj984GkbNSiA0Pk",
};

push.setVapidDetails(
  "mailto:test@test.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// generate an array of subscriptions from the subscribe button click on webpage. 
//iterate over them and
// call send notifications on all of them.
let subscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d0XzJHEQzRM:APA91bE2WOQlGJQL-VcaQ01Fq5ghBgvogQLJGmb9HD-Wu7aX7XV5isKbE55Mtf0oxBu8PM1-UkSJaqJf-rfdK0erXjx6rjLVQysA3ui1KLNPdQQRfGXn5vkMoxbAHUzPwXoOw0220o4N",
  expirationTime: null,
  keys: {
    p256dh:
      "BEqoBTtlY4tbGlZ43K4ga1towFd_4FRuzjJZ2s4SEIJiAfTuYeJIAdIK--JBRQkcrvhbwZrLgmDK_cIw69dDEII",
    auth: "A-MaF8_ujB9zOm9b7_9B-g",
  },
};

//subscription has been received from the frontend
//in future, the above can be retreived from DB,
//where on frontend button click we can save the subscription to database, and later that can be fetched from DB to send notification

push.sendNotification(subscription, "Helo Chitti").then((res) => {
  console.log(res);
});
