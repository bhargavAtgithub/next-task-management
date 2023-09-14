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
                    credentials: 'include',
                    mode: 'cors',
                })
                return res.json();
            } else {
                options = {
                    method: method,
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                    body: JSON.stringify(body)
                }

                const res = await fetch(BACKEND_URL + endpoint, options);
                let jsonRes = await res.json();
                return jsonRes;
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