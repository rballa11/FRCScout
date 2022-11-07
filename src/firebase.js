//plan to import the variables  into scout
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Firestore } from 'firebase/firestore/lite';
import { addDoc, doc, setDoc } from "firebase/firestore"; 

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

    export const submitReport = (report) =>{
      console.log('called');
      
      addDoc(dbref, report)
      .then(docRef => {
        console.log("data uploaded");
      })
      .catch( error => {
        console.log(error);
      })
      
      //use setDoc to set the id of the document to the match number
    }


    
    
    async function getCities(db){
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/