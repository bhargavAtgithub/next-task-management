"use client";

import React from "react";


const TextArea = ({ type, id, placeholder, name, onChange, value}) => {
    return (
        <div className="flex w-full">
            <textarea
                className={`
                    w-full 
                    p-4 
                    rounded-lg 
                    border border-slate-800 
                    bg-black
                    focus:outline-none focus:border-blue-600
                    resize-y
                    min-h-[10rem] max-h-[20rem]
                `}
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                value={value}
            />
        </div>
    )
}


export default TextArea;