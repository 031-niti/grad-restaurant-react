export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return {"x-accessToken" : user.accessToken};
    }else {
        return {};
    }
}