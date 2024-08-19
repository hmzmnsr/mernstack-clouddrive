import React from "react";

interface MyButtonProps {
    text: string;
    onClick?: () => void;
}

const LoginButton : React.FC<MyButtonProps> = ({ text, onClick }) => {
    return(
        <button 
            type="submit"
            onClick={onClick} 
            className="text-white bg-customBlue hover:bg-red-600 focus:outline-none focus:ring-blue-300 text-sm w-full sm:w-auto px-36 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3 rounded-lg"
        >
            {text}
        </button>
    );
};


export default LoginButton;