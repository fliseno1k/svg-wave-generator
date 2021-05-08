import React, { useEffect, useRef } from 'react';

const linearGradient = "linear-gradient(to right, rgb(255 0 0), rgb(255 255 0), rgb(0 255 0), rgb(0 255 255), rgb(0 0 255), rgb(255 0 255), rgb(255 0 0))";

const spectrumRanges = [
    { from: [255, 0, 0], to: [255, 255, 0], i: 1 }, 
    { from: [255, 255, 0], to: [0, 255, 0], i: 0 }, 
    { from: [0, 255, 0], to: [0, 255, 255], i: 2 },  
    { from: [0, 255, 255], to: [0, 0, 255], i: 1 }, 
    { from: [0, 0, 255], to: [255, 0, 255], i: 0 }, 
    { from: [255, 0, 255], to: [255, 0, 0], i: 2 }
];

const RGBColorValue = (from, to, leftRatio) => {
    return Math.round(from + (to - from) * leftRatio);
}

export default function ColorRange({ color, onColorChange }) {
    const container = useRef(null);
    const thumb = useRef(null);

    useEffect(() => {
        thumb.current.style.left = thumbPositionFromRGB(color) + '%';
    }, [color]);

    const onDown = (e) => {
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    };

    const onUp = (e) => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };

    const onMove = (e) => {
        onColorChange(RGBFromMousePosition(e));
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

    const thumbPositionFromRGB = (originalRGB) => {
        const simplifiedRGB = originalRGB.map(color => {
            return color < 255 ? 0 : 255;
        });

        const targetRangeIndex = spectrumRanges.findIndex(({ from }) => {
            return from[0] === simplifiedRGB[0] && from[1] === simplifiedRGB[1];
        });

        const { from, to, i } = spectrumRanges[targetRangeIndex];
        const positionInsideRange = (from[i] - to[i] > 0 ? originalRGB[i] :  255 - originalRGB[i]) / 255;
        const { width, x } = container.current.getBoundingClientRect();
        const singleRangeWidth = width / spectrumRanges.length;
        const globalPosition = (singleRangeWidth * targetRangeIndex + singleRangeWidth * positionInsideRange) / width * 100;

        return globalPosition;
    }

    const RGBFromMousePosition = (e) => {
        const { clientX } = e; 
        const { left, width } = container.current.getBoundingClientRect();
        const leftDistance = Math.min(Math.max(clientX - left, 0), width - 1);
        const rangeWidth = width / spectrumRanges.length;
        const rangeIndex = Math.floor(leftDistance / rangeWidth);
        const leftRatio = ((leftDistance % rangeWidth) / rangeWidth).toFixed(2);
        const { from, to } = spectrumRanges[rangeIndex];

        return from.map((_, i) => RGBColorValue(from[i], to[i], leftRatio));
    };

    return (
        <div className="w-full flex items-center my-2">
            <div className="relative flex flex-grow bg-white">
                <div 
                    ref={container} 
                    onMouseDown={onDown}
                    onClick={onMove}
                    className="w-full h-8 rounded-lg cursor-pointer" 
                    style={{background: linearGradient}}
                ></div>
                <div 
                    ref={thumb} 
                    className="absolute top-0 h-8 w-2 border-2 border-gray-800 ring-2 ring-offset-2 ring-indigo-400 rounded-full transform -translate-x-1/2 pointer-events-none"
                ></div>
            </div>
        </div>
    );
}