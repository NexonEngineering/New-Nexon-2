/**
 * firebase-config.js
 * Centralized Firebase configuration and synchronization logic.
 */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmK7a4cAoFHT2fNlnt_0MerotKEYLkQIU",
  authDomain: "nexon-admin.firebaseapp.com",
  databaseURL: "https://nexon-admin-default-rtdb.firebaseio.com",
  projectId: "nexon-admin",
  storageBucket: "nexon-admin.firebasestorage.app",
  messagingSenderId: "641077732544",
  appId: "1:641077732544:web:6000a67fa448fc188bb925"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();

// Firebase Auth Providers
const googleProvider = new firebase.auth.GoogleAuthProvider();
const emailProvider = new firebase.auth.EmailAuthProvider();

/**
 * Sign in with Google
 */
function signInWithGoogle() {
  return auth.signInWithPopup(googleProvider);
}

/**
 * Sign in with Email/Password
 */
function signInWithEmail(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

/**
 * Sign out
 */
function signOut() {
  return auth.signOut();
}

/**
 * Get current user
 */
function getCurrentUser() {
  return auth.currentUser;
}

/**
 * Auth state listener
 */
function onAuthStateChanged(callback) {
  return auth.onAuthStateChanged(callback);
}

/**
 * Global Real-time Sync Helper
 */
function syncWithFirebase(path, callback) {
  const ref = db.ref(path);
  ref.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback(data);
    }
  });
}

/**
 * Write data to Firebase
 */
function writeToFirebase(path, data) {
  return db.ref(path).set(data);
}

/**
 * Update specific path in Firebase
 */
function updateFirebase(path, data) {
  return db.ref(path).update(data);
}

/**
 * Visitor Tracking logic
 */
function trackVisitors() {
  const visitorRef = db.ref('stats/activeVisitors');
  const connectedRef = db.ref('.info/connected');
  
  connectedRef.on('value', (snap) => {
    if (snap.val() === true) {
      const con = visitorRef.push();
      con.onDisconnect().remove();
      con.set(true);
    }
  });
}
