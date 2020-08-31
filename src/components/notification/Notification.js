import React from "react";
// import GetAppIcon from "@material-ui/icons/GetApp";
import "./Notification.css";
const webpush = require('web-push');

export default class Notification extends React.Component {

  constructor(props){
    super(props);
      // VAPID keys should only be generated only once.
      const validKeys = webpush.generateVAPIDKeys();
      console.log("WEB-PUSH",validKeys);
      }

     displayConfirmNotification() {

      let notificationOpts = {
        body: 'Some notification information.',
        icon: '/icon.png'
      }
      let n = new Notification('My new Notification.', notificationOpts);
      n.onclick = () => {
        console.log('Notification Clicked');
      }
    }

     askForNotificationPermission(){
        window.Notification.requestPermission(function(result) {
            console.log('User Choice', result);
            if (result !== 'granted') {
              console.log('No notification permission granted!');
            } else {
              console.log('Permission to hai !');

              let notificationOpts = {
                body: 'Successfully subscribed to notifications !',
                icon: './../../logo192.png'
              }
              var n = new window.Notification('Welcome to JDF!.',notificationOpts);
              n.onclick = () => {
                console.log('Notification Clicked');
              }
            }
          });
    }

    render() {
    return (
      <div className="main-div">
          <button onClick={this.askForNotificationPermission}>Subscribe</button>
      </div>
    );
  }
}
