/* Registra usuarios nuevos */

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)}
    
  /* Acceso a usuarios existentes */

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)}
  
  /* Acceso con google */  

export const signInGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};
/* cerrar sesion*/

export const singOut = () => {
   return firebase.auth().signOut()
  }


  
 
