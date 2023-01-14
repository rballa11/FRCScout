//plan to import the variables  into scout
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, getDoc } from 'firebase/firestore/lite';

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
    const docsnap = 0;

    export const submitReport = async (report) =>{
      console.log('called');
      const repor = report;
      const {team} = report;
      
      
      
      console.log(team);
      var docReference = doc( dbref, "/"+team);
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
    export const hashmap = new Map();
    export const fetchData = async() =>{
      const q = query(dbref, where ("match", ">=", 1))
      const matchdocs = await getDocs(q)
      matchdocs.forEach((doc) => {
        hashmap.set(doc["match"], doc)
      })}
    
    export const getAvailability  = async(teamnum) =>{
      const docref = doc(db, dbref, teamnum)
      docsnap = await getDoc(docref)

      if(docsnap.exists()){
        
        return true;
      }else{
        
        return false;
      }
      
    }

    export const getData = (teamnums) =>{
      if(getAvailability(teamnums))
        return docsnap
      else
        return;
    }

    

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