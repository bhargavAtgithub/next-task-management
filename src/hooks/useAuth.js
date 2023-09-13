import { useContext } from "react"
import { AuthContext } from "@/context/authContext";

const useAuth = () => {
    const auth = useContext(AuthContext);

    return {
        signInSignUp: auth.signInSignUp,
        signOut: auth.signOut
    }
}

export default useAuth;