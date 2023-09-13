import { useRouter } from "next/router";
import { BACKEND_URL } from "@/constants";

const useFetch = () => {
    const router = useRouter();

    const apiFetch = async (endpoint, method='GET', body) => {
        try {
            let options = {};
            if(method === 'GET'){
                const res = await fetch(BACKEND_URL + endpoint, {
                    method: 'GET',
                    credentials: 'include'
                })
                return res.json();
            } else {
                options = {
                    method: method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                    body: JSON.stringify(body)
                }

                const res = await fetch(BACKEND_URL + endpoint, options);
                return res.json();
            }
    
            
        } catch (error) {
            console.log(error)
            router.push('/auth/sign-in');
        }
    }

    return {
        apiFetch
    }
}

export default useFetch;