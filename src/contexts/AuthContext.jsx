import { useState, createContext, useContext } from "react";


const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {

    const [ authed, setAuthed ] = useState(false)
    const [ user, setUser ] = useState(null)

    // login/out functionalities
    const login = (creds) => {
        // do api calls and check for credentials
        setUser(creds)
        setAuthed(true)
        console.log('logged in with: ', creds)
    }
        
    const logout = () => {
        return new Promise((res) => {
            setUser(null)
            setAuthed(false)
            res()
            console.log('logged out')
        });
    }

    return (
        <AuthContext.Provider
            value={{
                authed,
                user,
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
    
}


export const useAuthContext = () => useContext(AuthContext);
export default AuthContextProvider;