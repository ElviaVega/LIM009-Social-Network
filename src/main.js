import {initRouter} from './router.js'
import {observer} from './view/view-controller.js'

// Este es el punto de entrada de tu aplicacion
// Your web app's Firebase configuration
const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDX6B4kisWX89t09DIgPMa6wEpLjVwmR9c",
    authDomain: "usuarios-7e5a0.firebaseapp.com",
    databaseURL: "https://usuarios-7e5a0.firebaseio.com",
    projectId: "usuarios-7e5a0",
    storageBucket: "usuarios-7e5a0.appspot.com",
    messagingSenderId: "41490320294",
    appId: "1:41490320294:web:52694242490d9143"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  /*changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
*/
initRouter();
//observer();
}

  
  window.onload = init();