"use client";

import React from "react";

const IconButton = ({ Icon, onClick }) => {
    return (
        <button 
            className={`
                w-12 h-12 rounded-full
                hover:border hover:boder-slate-800
                flex items-center justify-center
                active:border-red-600
            `}
            onClick={onClick}
        >
            <Icon />
        </button>
    )
}

export default IconButton;