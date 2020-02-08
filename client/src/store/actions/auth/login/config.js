import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyD95GvTlNXNL9QCkaOcVe2DffkVVZc5RVw',
    authDomain: "aff-store.firebaseapp.com",
    databaseURL: "https://aff-store.firebaseio.com",
    projectId: "aff-store",
    messagingSenderId: "385265018716",
    appId: "1:385265018716:web:6f468f1408129ffd",
    storageBucket: 'aff-store.appspot.com'
});

export default app;