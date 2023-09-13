const Button = ({ children, onClick, type }) => {
    return (
        <button className={`
            w-full 
            border border-slate-700
            hover:border-blue-700
            active:bg-blue-700
            rounded-lg p-4
            `}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;