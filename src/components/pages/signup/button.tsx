import React from "react";

interface MyButtonProps {
    text: string;
    onClick?: () => void;
}

const SignUpButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
    return(
        <button 
            type="submit"
            onClick={onClick} 
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3 rounded-b-lg"
        >
            {text}
        </button>
    )
}

export default SignUpButton


