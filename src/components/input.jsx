"use client";

import React from "react";


const Input = ({ type='text', id, placeholder, ...props}) => {
    return (
        <div className="flex w-full">
            <input
                className={`
                    w-full 
                    p-4 
                    rounded-lg 
                    border border-slate-800 
                    bg-black
                    focus:outline-none focus:border-blue-600
                `}
                type={type}
                id={id}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}


export default Input;