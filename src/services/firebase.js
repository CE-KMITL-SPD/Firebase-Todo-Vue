import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: `${process.env.VUE_APP_apiKey}`,
  authDomain: `${process.env.VUE_APP_authDomain}`,
  databaseURL: `${process.env.VUE_APP_databaseURL}`,
  projectId: `${process.env.VUE_APP_projectId}`,
  storageBucket: `${process.env.VUE_APP_storageBucket}`,
  messagingSenderId: `${process.env.VUE_APP_messagingSenderId}`,
  appId: `${process.env.VUE_APP_appId}`,
  measurementId: `${process.env.VUE_APP_measurementI}`
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

export { db, auth, currentUser }
