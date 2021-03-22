import firebase from "./firebase";
import "firebase/firestore";

import firebase from './firebase';

const firestore = firebase.firestore();

export function createCards(data, uid) {
    return firestore.collection('Food').doc(uid).set(data);
}