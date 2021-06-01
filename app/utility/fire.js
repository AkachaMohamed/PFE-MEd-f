import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB0JyXnPLjJcrRguUcieIr_TaOyV5fDvvE",
  authDomain: "projetpfe-9d652.firebaseapp.com",
  projectId: "projetpfe-9d652",
  storageBucket: "projetpfe-9d652.appspot.com",
  messagingSenderId: "973487911514",
  appId: "1:973487911514:web:53428473a799c66d28de63"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
