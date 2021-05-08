import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function GradientRange({ colors, onGradientChange, onThumbSelect }) {
    const container = useRef(null);
    // const [sliderColors, setSliderColors] = useState(colors);
    const currentThumb = useRef(0);

    // useEffect(() => {
    //     setSliderColors(colors);
    // }, [colors]);

    const onDown = (i) => {
        currentThumb.current = i;
        onThumbSelect(currentThumb.current);

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);   
    }

    const onUp = (e) => {
        // onGradientChange(sliderColors);

        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    }

    const onMove = (e) => {
        const newColors = [...colors];
        newColors[currentThumb.current].offset = calcThumbOffset(e);
        onGradientChange(newColors);
    }

    const calcThumbOffset = (e) => {
        const { clientX } = e;
        const rect = container.current.getBoundingClientRect();

        let position = 0;
        if (clientX < rect.x) {
            position = 0;
        } else if (clientX > rect.x + rect.width) {
            position = 100;
        } else {
            position = (clientX - rect.x) / rect.width * 100;
        }

        return position;
    };

    return (
        <div  className="relative w-full my-2">
            <div 
                ref={container}
                className="w-full h-8 rounded-lg"
                style={{ 
                    background: `linear-gradient(to right, ${Object.values(colors).sort((a, b) => a.offset - b.offset).map(({ color, offset }) => 'rgba(' + color.join(', ') + ', 1) ' + offset + '%').join(', ')})`
                }}
            ></div>
            {
                colors.map((color, i) => (
                    <div
                        key={i} 
                        onMouseDown={() => onDown(i)}
                        className="absolute top-0 h-10 w-3 -mt-1 border-2 bg-white border-gray-600 transform -translate-x-1/2 rounded-lg flex items-center justify-center cursor-move"
                        style={{left: color.offset + '%'}}
                    >
                        <div 
                            className="w-1 h-8 rounded-lg pointer-events-none"
                            style={{background: `rgba(${color.color.join(', ')}, 1)`}}
                        ></div>
                    </div>
                ))
            }
        </div>
    );
}