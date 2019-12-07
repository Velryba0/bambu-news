import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../config/keys';
// import 'babel-polyfill';

const keys = config;

  export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

   if(!snapShot.exists) {
    let {displayName, email } = userAuth;
    console.log(userAuth)

    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      } catch(error) {
        console.log('error al crear el usuario', error.message);
      }
  }
  
  // console.log(userRef)
   return userRef;
    
  };

  firebase.initializeApp(keys);
  
  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 