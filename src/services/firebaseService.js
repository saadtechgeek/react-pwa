import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmtN7uXagTKe28KUyB6NObdtFDaPwQlcM",
    authDomain: "notificationapp-fe4c2.firebaseapp.com",
    databaseURL: "https://notificationapp-fe4c2.firebaseio.com",
    projectId: "notificationapp-fe4c2",
    storageBucket: "notificationapp-fe4c2.appspot.com",
    messagingSenderId: "422309575419",
    appId: "1:422309575419:web:ac77d9fd40217785d8ce5e"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification(){
    // if permission is there then send messages.
    Notification.requestPermission().then((permission)=>{
        console.log(permission);
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    });
}