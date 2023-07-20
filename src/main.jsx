import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxq51rO1P6LmbWyD1JM03IjJEPHeyy8wM',
  authDomain: 'fakestore-app-560a7.firebaseapp.com',
  projectId: 'fakestore-app-560a7',
  storageBucket: 'fakestore-app-560a7.appspot.com',
  messagingSenderId: '915883779749',
  appId: '1:915883779749:web:3d7f50b660c8f1aa6ecf4c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
