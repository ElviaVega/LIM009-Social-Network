import formPost from './post.js'
import {logOut} from './view-controller.js'
import userProfile from './userProfile.js'
import { getPost } from "../controler-firebase.js"
import showPost from "./showPost.js"


export default (user) => {
//console.log(user)
  const formWelcome  = document.createElement("div");
  const tmpWelcome = `
  
    <header>
      <div>
        <img src="./imagen/logo-travelovers.png" class='logo-welcome'>
      </div>
      <nav>
        <ul class='menu-nav'>
          <li> perfil</li>
          <li> <a href="https://www.mochiadictos.com/consejos-viajeros/" target="_blank" </a> Consejos viajeros</li>
          <li><a id='sign-out'>Cerrar Sesión</a></li>             
        </ul>
      </nav>
    </header>
      <div class='imagen-portada'>
        <img src="./imagen/colash.jpg" class='img-portada'>        
      </div> 
       
      <h2> Bienvenido </h2>       
    `
  formWelcome.innerHTML = tmpWelcome;
  formWelcome.appendChild(userProfile(user));
  formWelcome.appendChild(formPost(user));  
  const contenedorPost = document.createElement("div")
  formWelcome.appendChild(contenedorPost)
  getPost(posts => {               
    contenedorPost.innerHTML = ""
    //console.log(posts)
    posts.forEach((post)=> {
    //console.log(post)
    const postElem = showPost(post,user)
    if(post.visibility === "Todos"){                                    
      contenedorPost.appendChild(postElem)
    } else if(post.visibility === "Solo yo" && user.id === post.idUser){
      contenedorPost.appendChild(postElem)}
      })
    })
             /*
        showAllPosts((postList) => {
            contenedorPost.innerHTML=""
            contenedorPost.appendChild(postList)
        }, user);
        */

    const btnSignOut = formWelcome.querySelector('#sign-out');
    btnSignOut.addEventListener('click', logOut)
               
    return formWelcome;
} 
        

 