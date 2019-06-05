//import { userActiv } from "../controler-firebase";

export default (user) => {  
      
    const formUserProfile  = document.createElement("div");
    const tmpUserProfile = `
        <div>
            <img id="photo" src="${user.photo}" alt="photo of user" />
            <h2 id="">${user.name}</h2>
        </div>
        `
    formUserProfile.innerHTML = tmpUserProfile
    return formUserProfile;
}






