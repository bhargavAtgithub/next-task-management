import Input from "@/components/input"
import Button from "@/components/Button";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import {authValidator} from "@/util";
import { useState } from "react";

const Login = () => {
    const { signInSignUp } = useAuth();
    const [type, setType] = useState('in');

    const inOrUp = (creds) => {
        signInSignUp(creds, type)
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(inOrUp, authValidator, {
        name: '',
        email: '',
        password: ''
    });

    return (
        <form onSubmit={handleSubmit}x>
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-start w-1/4 gap-6">
                    <span className="text-blue-700 text-lg font-bold mb-4">Sign In</span>
                    <div className="w-full flex flex-col gap-2">
                        {
                            type == 'up' ?
                            <Input 
                                placeholder={'Enter your name'} 
                                name="name" 
                                type="name"
                                onChange={handleChange} 
                                value={values.name || ''}
                                required
                            /> 
                            : null
                        }
                            
                        <Input 
                            placeholder={'Enter your email'} 
                            name="email" 
                            type="email"
                            onChange={handleChange} 
                            value={values.email || ''}
                            required
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600">{errors.email}</p>
                        )}
                        <Input 
                            placeholder={'Enter your password'} 
                            type={'password'} 
                            name="password" 
                            onChange={handleChange} 
                            value={values.password || ''} 
                            required 
                        />
                        {errors.password && (
                            <p className="text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>
                    <Button type="submit">Sign {type}</Button>
                    <Button type="button" onClick={() => {
                        if(type == 'in') setType('up')
                        else setType('in');
                    }}>Sign {type == 'in' ? 'up' : 'in'}</Button>
                </div>
            </div>
        </form>
    )
}

export default Login;