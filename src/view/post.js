import { sendToCollection } from "./view-controller.js";
//import {readData} from "..controler-firebase.js/";

export default () => {
    /* seccion dond se redacta el post */
    const formPost  = document.createElement("div");
    const tmpPost = `
        <div>
        <form>
            <textarea id ="post" placeholder = "¿Que quieres compartir?" name="texto" spellcheck="true"></textarea>
            <select>
                <option value="privado">Privado</option>
                <option value="publico">Público</option>
            </select>
            <button  id="btn-compartir" type = "button" class="btn-enviar" > Compartir </button>
            //<div id="pintar-comentario"</div>
        </form>
        <div id="containerPost"></div>
        </div>
        `
    formPost.innerHTML = tmpPost;
   
    const btnCompartir = formPost.querySelector('#btn-compartir');
    btnCompartir.addEventListener('click', sendToCollection);

   
     
    return formPost;  

}
    
    
    
    
  
    
  