/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
*
*
*   This hook takes the path of a given image in the google firestore 
*   and restores the url for that image. 
*
*/

// Standard React and Firebase items
import { useState, useEffect } from 'react';
import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';


const useFirestoreImage = (imagePath:string):string=>{

  const [ imageURL, setImageURL ] = useState('');

  useEffect(()=>{

    imagePath.valueOf
    async function fetchFirebaseImage(){
      try{
        const storage =  firebase.storage?.();
        const imageStr = await storage?.ref( `${imagePath}` ).getDownloadURL();
        setImageURL(""+imageStr);
      } catch (error) {
        console.log(error)
      }
    }
    fetchFirebaseImage()
  },[imagePath]);

  return imageURL

}

export default useFirestoreImage