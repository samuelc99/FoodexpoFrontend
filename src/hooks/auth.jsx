import { createContext, useContext } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    async function sigIn({ email, password }) {
        const response = await api.post("sessions", {email, password})
        console.log(response)
    }

    return (
        <AuthContext.Provider value={{ name: "sam"}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    
    return context
}

export { AuthProvider, useAuth }