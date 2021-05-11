import React, { useCallback, useEffect, useState } from 'react';

import GradientRange from './GradientRange';
import ColorRange from './ColorRange';

import createDefaultLayer from '../../utils/createDefaultLayer';

export default function ColorPicker({ layer, changeColors }) {
    const [colors, setColors] = useState(layer.colors);
    const [currentColor, setCurrentColor] = useState(0);

    useEffect(() => {
        setColors(layer.colors);
    }, [layer]);

    const onThumbSelect = (id) => {
        setCurrentColor(id);
    }

    const onGradientChange = (newColors) => {        
        changeColors(newColors);
    };

    const onColorChange = (color) => {
        const newColors = [...colors];
        newColors[currentColor].color = color;

        changeColors(newColors);
    }

    return (
        <div className="flex flex-col item-center">
            <GradientRange 
                colors={colors}
                currentColor={currentColor}
                onThumbSelect={onThumbSelect}
                onGradientChange={onGradientChange}
            />
            <ColorRange 
                color={colors[currentColor].color} 
                onColorChange={onColorChange} 
            />
        </div>
    );
}