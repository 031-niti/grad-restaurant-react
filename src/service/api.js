import axios from "axios";
import TokenService from "./token.service";

//config
const BASE_URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    auth: {
        username: USERNAME,
        password: PASSWORD
    }
});

//Add interceptors to requset obj
instance.interceptors.request.use(
    (config) => {
        const token = TokenService.getLocalAccessToken();
        if (token) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//Add interceptors to requset obj
instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/api/signin" && err.response) {
            if (err.response.status === 401 && originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await instance.post("/api/auth/refreshToken", {
                        refreshToken: TokenService.getLocalRefreshToken(),
                    });
                    const { accessToken } = rs.data;
                    TokenService.setLocalAccessToken(accessToken);
                    return instance(originalConfig);
                }
                catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err)
    }
)

export default instance;