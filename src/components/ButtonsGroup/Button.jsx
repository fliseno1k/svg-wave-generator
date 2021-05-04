import React from 'react';

const btnStyles = {
    default: "w-10 h-10 flex items-center justify-center focus:outline-none",
    active: "bg-indigo-400 text-white focus:ring-4 focus:ring-indigo-200",
    inactive: "bg-transparent text-gray-600"
}

export default function Button({ roundedStyle, callback, children, active }) {
    return (
        <button 
            className={[ btnStyles.default, active ? btnStyles.active : btnStyles.inactive ].join(' ')}
            style={roundedStyle}
            onClick={callback}
        >
            { children }
        </button>
    );
}