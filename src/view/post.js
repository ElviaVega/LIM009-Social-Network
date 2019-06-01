import { sendToCollection } from "./view-controller.js";

export default () => {
    const formPost  = document.createElement("div");
    const tmpPost = `
        <div>
        <form>
            <textarea id ="post" placeholder = "¿Que quieres compartir?"></textarea>
            <select>
                <option value="privado">Privado</option>
                <option value="publico">Publico</option>
            </select>
            <button  id="btn-compartir" type = "button" class="btn-enviar" > Compartir </button>
            //<div id="pintar-comentario"</div>
        </form>
        </div>
        `
    formPost.innerHTML = tmpPost;
   
    const btnCompartir = formPost.querySelector('#btn-compartir');
    btnCompartir.addEventListener('click', sendToCollection);
     
    return formPost;     
}