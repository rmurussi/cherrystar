function getUser(){
    let user:any = localStorage.getItem("user");
    user = user != null ? user : '{"email": ""}';
    return JSON.parse(user);
}

function setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
}

function logout() {
    let user = {"email": ""};
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

export {getUser, setUser, logout};