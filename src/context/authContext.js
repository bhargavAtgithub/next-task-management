import React, { createContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import useFetch from '@/hooks/useFetch';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const apiFetch = useFetch();
    const router = useRouter();

    const signInSignUp = async (creds, type) => {
        try {
            // Just for the sake of project using ipaddr of the server
            const loginCheck = await apiFetch.apiFetch('/auth/sign-' + type, 'POST', {
                ...creds
            })

            const res = await loginCheck;
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