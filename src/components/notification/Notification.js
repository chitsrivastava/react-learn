import React from "react";
// import GetAppIcon from "@material-ui/icons/GetApp";
import "./Notification.css";
const webpush = require("web-push");

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    // VAPID keys should only be generated only once.
    //const validKeys = webpush.generateVAPIDKeys();
    this.state = {vapidKeys:{
      publicKey: 'BBmraJAu9t-4VyQ6TO0hGuAr9_c8OrPz77CSwaSc96i29MZ6WtCJBf-uyQGnOrCC8qvc8f7NXfnsHI2EnD08MQc',
      privateKey: '8OyK4CyW8polj_gwJLICSlhBv_3mQj984GkbNSiA0Pk'
    }};
  }

  displayConfirmNotification() {
    let notificationOpts = {
      body: "Some notification information.",
      icon: "/icon.png",
    };
    let n = new Notification("My new Notification.", notificationOpts);
    n.onclick = () => {
      console.log("Notification Clicked");
    };
  }

  askForNotificationPermission() {
    window.Notification.requestPermission(function (result) {
      console.log("User Choice", result);
      if (result !== "granted") {
        console.log("No notification permission granted!");
      } else {
        console.log("Permission to hai !");

        let notificationOpts = {
          body: "Successfully subscribed to notifications !",
          icon: "./../../logo192.png",
        };
        var n = new window.Notification("Welcome to JDF!.", notificationOpts);
        n.onclick = () => {
          console.log("Notification Clicked");
        };
      }
    });
  }
  subscribeUser() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(function (reg) {
        reg.pushManager
          .subscribe({
            userVisibleOnly: true,
          })
          .then(function (sub) {
            console.log("Endpoint URL: ", sub.endpoint);
          })
          .catch(function (e) {
            if (Notification.permission === "denied") {
              console.warn("Permission for notifications was denied");
            } else {
              console.error("Unable to subscribe to push", e);
            }
          });
      });
    }
  }
  enableNotifications = async () => {
    let sw = await navigator.serviceWorker.ready;
    // Save this push to database so as to access users who have subscribed to push notifications
    
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
       this.state.vapidKeys.publicKey, //The public key from the server
    });
    this.setState({ notificationsEnabled: true });
    console.log(JSON.stringify(push));
  };
unsubscribeUser(){
  navigator.serviceWorker.ready.then(function(reg) {
    reg.pushManager.getSubscription().then(function(subscription) {
      subscription.unsubscribe().then(function(successful) {
       console.log("Successfully Unsubscribed !!",successful)
      }).catch(function(e) {
        console.log("Falied Unsubscribed !!",e)
      })
    })        
  });
}
  
  render() {
    return (
      <div className="main-div">
        <button onClick={this.askForNotificationPermission}>
          permit for Notification
        </button>
        <button onClick={this.enableNotifications}>Subscribe for Push</button>
        <button onClick={this.unsubscribeUser}>Unsubscribe for Push</button>
      </div>
    );
  }
}
