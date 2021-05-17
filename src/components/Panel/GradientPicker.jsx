import React, { useState } from 'react';

import ColorRange from './ColorRange';

export default React.memo(function GradientPicker({ 
    gradient, 
    handleGradientChange 
}) {
    const [currentColor, setCurrentColor] = useState(Object.keys(gradient)[0]);

    const handleColorSelect = (newColorValue) => {
        handleGradientChange(Object.fromEntries([[currentColor, newColorValue]]));
    };

    return(
        <div className="w-full flex flex-col mt-4">
            <h4 className="flex-1 overflow-hidden font-semibold text-lg text-gray-400">
                Gradient
            </h4>
            <div className="flex items-center mt-3">
                <div className="flex flex-none mr-2">
                    {
                        Object.values(gradient).map((color, i) => {
                            return (
                                <div 
                                    key={Object.keys(gradient)[i]}
                                    tabIndex="0" 
                                    style={{background: gradient[Object.keys(gradient)[i]]}}
                                    className={`w-8 h-8 mr-2 rounded-lg transition-all ring-4 ring-white cursor-pointer ${currentColor === Object.keys(gradient)[i] ? 'ring-indigo-200 border-2 border-white' : ''}`}
                                    onClick={(e) => setCurrentColor(Object.keys(gradient)[i])}
                                ></div>
                            );
                        })
                    }
                </div>
                <div className="flex flex-auto">
                    <ColorRange handleColorSelect={handleColorSelect} />
                </div>
            </div>
        </div>
    );
});