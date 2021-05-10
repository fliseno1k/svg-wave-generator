import React from 'react';

export default function InputGroup({ leftIcon, rightIcon, value, onChange}) {
    return (
        <div className="w-full py-2 flex items-center justify-between">
            <div className="flex-none mr-3 text-gray-600">
                { leftIcon }
            </div>
            <input 
                type="range" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="range-input flex-auto"
            />
            <div className="flex-none ml-3 text-gray-600">
                { rightIcon }
            </div>
        </div>
    );
}