import React from 'react';

export default function Group({ children }) {
    return (
        <div className="flex mr-4 rounded-md bg-gray-100">
            { children }
        </div>
    );
}