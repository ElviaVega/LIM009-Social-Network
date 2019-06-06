import { getPost } from "../controler-firebase.js";
import showPost from "./showPost.js"


export default (callback, user) => {
    
    const postList  = document.createElement("div");
    getPost((posts) => {
        posts.forEach((post) => {
            const postElem = showPost(post, user)
            postList.appendChild(postElem)
        })
        callback(postList)
    })

}

    