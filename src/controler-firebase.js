
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
};

export const setUsers = (nameCollection, docId, obj) => {
  return firebase.firestore().collection(nameCollection).doc(docId).set(obj)
}

/* identificar al usuario que accedio a la aplicacion*/

export const userAcces = () => {
  return firebase.auth().currentUser;
 
};
export const userActiv = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user)
      console.log(user)
    } else {
      // No user is signed in.
      console.log("no hay usuario activo")

      }
    });
 };


/* obtener el usuario activo desde coleccion users */

export const userFirestore = (id) => {
   return firebase.firestore().collection("users").doc(id).get();
};

/* Obtener los datos desde la colección de firestore */

export const getPost =(callback) => {
  firebase.firestore().collection('post')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({id:doc.id, 
                name:doc.data().name,
                post: doc.data().post,
                idUser: doc.data().userId })
    });
  callback(data);
  })
}
  
/* enviando post a coleccion de post */
export const setPost = (obj) =>{
  return firebase.firestore().collection("post").add(obj)
}

/*leer datos de la coleccion  */

export const readData = (namecollection) => {
  return firebase.firestore().collection(namecollection).onSnapShot();
}

/* borrar post */

export const deletePost = (idPost) => {
  return firebase.firestore().collection("post").doc(idPost).delete()
}

/* editando post 

export const editPost = (idPost) => {

var postRef = firebase.firestore().collection("post").doc(idPost);

// Set the "capital" field of the city 'DC'
return postRef.update({
    post: newPost
})
  .then(function() {
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
}
 
*/
