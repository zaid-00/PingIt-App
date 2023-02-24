import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAvMEc2xTw2gWu95609tQe1cNKItv-WZTw",
  authDomain: "chatapp-49feb.firebaseapp.com",
  projectId: "chatapp-49feb",
  storageBucket: "chatapp-49feb.appspot.com",
  messagingSenderId: "724342545371",
  appId: "1:724342545371:web:1a88279b68277c6f6025fe",
  measurementId: "G-RXBYV3VTW9"
};
initializeApp(firebaseConfig);
export const auth=getAuth();
export const database=getFirestore();