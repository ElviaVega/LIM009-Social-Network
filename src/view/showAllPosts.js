import { getPost } from "../controler-firebase.js";
import showPost from "./showPost.js"


export default (callback) => {
    
    const postList  = document.createElement("div");
    getPost((posts) => {
        posts.forEach((post) => {
            const postElem = showPost(post)
            postList.appendChild(postElem)
        })
        callback(postList)
    })

}

    