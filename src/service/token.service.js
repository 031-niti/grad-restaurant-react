const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
}

const getLocalAccessToken = () =>{
    const user = JSON.parse(localStorage.getItem("user"))
    return user?.accessToken;
}

const setLocalAccessToken = (token) => {
    const user = JSON.parse(localStorage.getItem("user"))
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};

const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
};

const removeUser = () => {
    localStorage.removeItem("user")
};

const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    setLocalAccessToken,
    getUser,
    setUser,
    removeUser
}

export default TokenService;