var config = {
  apiKey: "AIzaSyCcB9Ozrh1M-WzrwrSMB6t5y1flL8yXYmY",
  authDomain: "angularfire-dae2e.firebaseapp.com",
  databaseURL: "https://angularfire-dae2e.firebaseio.com",
  storageBucket: "angularfire-dae2e.appspot.com",
};
firebase.initializeApp(config);
firebase.database().ref().child("angularfire").remove();
