import React, { useCallback, useRef, useState } from 'react';

import GradientRange from './GradientRange';
import ColorRange from './ColorRange';
import { createDefaultLayer } from '../../utils/constants';

export default function ColorPicker() {
    const [colors, setColors] = useState(createDefaultLayer().colors);
    const [currentColor, setCurrentColor] = useState(0);

    const onGradientChange = (newColors) => {
        setColors(newColors);
    }

    const onThumbSelect = (i) => {
        setCurrentColor(i);
    }

    const onColorChange = (color) => {
        const newColors = [...colors];
        newColors[currentColor].color = color;

        setColors(newColors);
    }

    return (
        <div className="flex flex-col item-center">
            <GradientRange 
                colors={colors}
                currentColor={0}
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