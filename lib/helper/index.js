import firebase from 'react-native-firebase';

const fireDB = firebase.database();
const fireStorage = firebase.storage();
const FCM = firebase.messaging();
const firebaseAuth = firebase.auth();

export {
    fireDB,
    fireStorage,
    FCM,
    firebaseAuth
}