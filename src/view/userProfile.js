
export default () => {
    const formUserProfile  = document.createElement("div");
    const tmpUserProfile = `
        <div>
            <img id="photo" alt="user-photo" class="user-photo>
            <h2 id="username"></h2>
        </div>
        `
    formUserProfile.innerHTML = tmpUserProfile
    return formUserProfile;
}






