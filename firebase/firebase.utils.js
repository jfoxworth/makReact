import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCecFeql2d7koZZjNZL98OYkjifgx547KQ",
  authDomain: "makstudio-78a40.firebaseapp.com",
  databaseURL: "https://makstudio-78a40.firebaseio.com",
  projectId: "makstudio-78a40",
  storageBucket: "makstudio-78a40.appspot.com",
  messagingSenderId: "653241713853",
  appId: "1:653241713853:web:16a569b1ad698eaba3a3d4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


// This function creates a user document when none exists
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};




// This funtion takes a collection snapshot and pulls the data for
// each document within that snapshot
export const convertCollectionSnapshotToMap = (collection)=>{
  const transformedCollection = collection.docs.map(doc=>{
    return doc.data();
  });
  return transformedCollection
}


// Check for user session on firebase
export const getCurrentUser = () => {
  return new Promise((resolve, reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}


// Create the exported items that are simplifications and the default
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


