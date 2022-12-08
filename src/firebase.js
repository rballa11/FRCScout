//plan to import the variables  into scout
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore/lite';

import { doc, setDoc } from "firebase/firestore/lite"; 

    const firebaseconfig = {
        apiKey: "AIzaSyCURqq513lRNxcy-kkAGUav6oB3MLHzq28",
        authDomain: "mytorquescout.firebaseapp.com",
        projectId: "mytorquescout",
        storageBucket: "mytorquescout.appspot.com",
        messagingSenderId: "811416881060",
        appId: "1:811416881060:web:0dfec845c59d93315d2331",
        measurementId: "G-79FW4R9FDW"
    };
    export const app = initializeApp(firebaseconfig);
    export const db = getFirestore(app);
    const dbref = collection(db, "Data");

    export const submitReport = async (report) =>{
      console.log('called');
      const repor = report;
      const {match} = report;
      
      
      
      console.log(match);
      var docReference = doc( dbref, "/"+match);
      //await addDoc(dbref, repor);
      console.log("doc");
     await setDoc(docReference, repor);
    console.log("document added");
    /*
    setDoc(dbref, report)
    .then(docRef => {
        console.log("Document has been added successfully");
    })
    .catch(error => {
        console.log(error);
    })
    */
      //use setDoc to set the id of the document to the match number
    };


    

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {col
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/