import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyARwQGxeECyF7AUNsBxMY7vxj4loXs0ZYA",
    authDomain: "restaurants-cdf79.firebaseapp.com",
    projectId: "restaurants-cdf79",
    storageBucket: "restaurants-cdf79.appspot.com",
    messagingSenderId: "146519779297",
    appId: "1:146519779297:web:d18a6cb0cbdc89e94414a0"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)