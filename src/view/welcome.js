import formPost from './post.js'
//import showAllPosts from './showAllPosts.js'
import {logOut} from './view-controller.js'
import userProfile from './userProfile.js'
import { getPost } from "../controler-firebase.js"
import showPost from "./showPost.js"
import post from './post.js';

export default (user) => {
    console.log(user)
    const formWelcome  = document.createElement("div");
    const tmpWelcome = `
        <div >
        <header>
            <nav>
                <ul class='menu-nav'>
                    <li> perfil</li>
                    <li> Consejos viajeros </li>
                    <li><a id='sign-out'>Cerrar Sesión</a></li>             
                 </ul>
            </nav>
        </header>
        <h2> Bienvenido </h2>
        
        </div>       
        `
        formWelcome.innerHTML = tmpWelcome;
        formWelcome.appendChild(formPost(user));
        formWelcome.appendChild(userProfile(user));
        const contenedorPost = document.createElement("div")
        formWelcome.appendChild(contenedorPost)
        getPost(posts => {                
            contenedorPost.innerHTML = ""
            posts.forEach((post)=>{
                const postElem = showPost(post,user)
                contenedorPost.appendChild(postElem)

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
        

 