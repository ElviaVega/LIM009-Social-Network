import formPost from './post.js'
import {logOut} from './view-controller.js'
import userProfile from './userProfile.js'
import { getPost } from "../controler-firebase.js"
import showPost from "./showPost.js"


export default (user) => {
//console.log(user)
  const formWelcome  = document.createElement("div");
  formWelcome.className="contenedor-welcome"
  const tmpWelcome = `  
    <header>
    <div class="hamburger" >
      <input type="checkbox" id="btn-menu">
      <label for="btn-menu"><i style="font-size:25px" class="fas fa-bars" aria-hidden="true">  </i> </label>
      <nav class="menu">
        <ul>
          <li> Perfil</li>
          <li><a id='sign-out'>Cerrar Sesión</a></li>
        </ul>
      </nav>
     </div>  
     <div class="log-maleta" >
        <img src="./imagen/logo-maleta2.png" class="welcomw-maleta">
      </div> 
      <button class="btn-sing-out"><a id='sign-out1'>Cerrar Sesión</a></button>             
        
                
    </header> 
          
    `
  formWelcome.innerHTML = tmpWelcome;
  const screenWelcome = document.createElement("div")
  formWelcome.appendChild(screenWelcome)
  screenWelcome.className = "screen-welcome"
  screenWelcome.appendChild(userProfile(user));
  const screenPost = document.createElement("div")
  screenPost.className = "screen-post"
  screenWelcome.appendChild(screenPost);
  screenPost.appendChild(formPost(user));  
  const contenedorPost = document.createElement("div")
  contenedorPost.className="con-gen-post"
  screenPost.appendChild(contenedorPost)
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
    const btnSignOut1 = formWelcome.querySelector('#sign-out1');
    btnSignOut1.addEventListener('click', logOut)
               
    return formWelcome;
} 
        

 