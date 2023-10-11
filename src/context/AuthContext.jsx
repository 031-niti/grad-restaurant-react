import { useContext, createContext, useState } from "react";
import AuthService from "../service/auth.service";
const AuthContext = createContext(null);
export const AuthProvider = ({children}) =>{
    const [user, setUser ] = useState ({});
    const login = (user) => setUser(user);
    const logout = () => {
        AuthService.logout();
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>  
    )
}

export const useAuthContext = () => useContext(AuthContext);