import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const {
  VUE_APP_FB_APIKEY: apiKey,
  VUE_APP_FB_AUTHDOMAIN: authDomain,
  VUE_APP_FB_PROJECTID: projectId,
  VUE_APP_FB_STORAGEBUCKET: storageBucket,
  VUE_APP_FB_MSGSENDERID: messagingSenderId,
  VUE_APP_FB_APPID: appId,
  VUE_APP_FB_MEASUREMENTID: measurementId,
} = process.env;

initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
});

export default getFirestore();
