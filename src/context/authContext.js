import React, { createContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const router = useRouter();

    const signInSignUp = async (creds, type) => {
        try {
            // Just for the sake of project using ipaddr of the server
            const loginCheck = await fetch('13.233.124.8:3000/auth/sign-' + type, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(creds)
            })

            const res = await loginCheck.json();
            console.log(res);
            if(res.user){
                router.push('/tasks');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const signOut = () => {
        Cookies.remove('token');
        router.push('/auth/sign-in');
    }

    return (
        <AuthContext.Provider value={{signInSignUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};
export default AuthProvider;