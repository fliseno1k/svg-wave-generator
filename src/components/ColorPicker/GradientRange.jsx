import React, { useRef } from 'react';

export default function GradientRange({ colors, currentColor, onGradientChange, onThumbSelect }) {
    const container = useRef(null);
    const currentThumb = useRef(currentColor);

    const onDown = (id) => {
        currentThumb.current = id;
        onThumbSelect(currentThumb.current);

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);   
    }

    const onUp = (e) => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };

    const onMove = (e) => {
        const newColors = [...colors];
        newColors[currentThumb.current].offset = calcThumbOffset(e);

        onGradientChange(newColors);
    };

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

    const colorsToStyle = () => {
        return `linear-gradient(to right, ${Object.values(colors).sort((a, b) => a.offset - b.offset).map(({color, offset}) => 'rgba('+ color.join(', ')+', 1) '+ offset+'%').join(', ')})`;
    }

    return (
        <div  className="relative w-full my-2">
            <div 
                ref={container}
                className="w-full h-8 rounded-lg"
                style={{background: colorsToStyle()}}
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