import React, { useState } from 'react';

export default function Canvas({ layers }) {
    
    return (
        <div className="flex flex-auto mr-4 rounded-lg overflow-hidden shadow-sm bg-white">
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 1440 500`}
                xmlns="http://www.w3.org/2000/svg"
                className="f-full transition duration-300 ease-in-out delay-150"
                preserveAspectRatio="none"
            >
                {
                    layers.map((layer, lIndex) => (
                        <g key={layer.id}>
                            <defs>
                                <linearGradient id={'gradient' + lIndex}>
                                    {
                                        layer.colors.map((color, i) => (
                                            <stop key={i} offset={color.offset + '%'} stopColor={`rgba(${color.color.join(', ')}, ${(lIndex + 1) / layers.length})`} />
                                        ))
                                    }
                                </linearGradient>
                            </defs>
                            <path
                                d={layer.path.d}
                                stroke={layer.path.strokeColor}
                                strokeWidth={layer.path.strokeWidth}
                                fill={`url(#${'gradient' + lIndex})`}
                                className="transition-all duration-300 ease-in-out delay-150"
                            />
                        </g>
                    ))
                }
            </svg>
        </div>
    );
};