/*
*
*   This hook takes the path of a given image in the google firestore 
*   and restores the url for that image. 
*
*/

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