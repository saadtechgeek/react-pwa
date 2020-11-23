importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
  firebase.messaging();