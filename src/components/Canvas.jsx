import React from 'react';

export default function Canvas({ computedPath, gradientColors }) {
    return (
        <div className="relative flex flex-auto mr-4 rounded-lg overflow-hidden shadow-sm bg-white">
            <div className="absolute bottom-0 left-0 w-full">
                <svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 1440 ${computedPath.svg.height}`}
                    xmlns={computedPath.svg.xmlns}
                    className="f-full transition duration-500 ease-in-out delay-150"
                    // preserveAspectRatio="none"
                >
                    {
                        computedPath.svg.path.map((path, i) => (
                            <g key={i}>
                                <defs>
                                    <linearGradient id={'gradient' + i}>
                                        <stop 
                                            offset="5%" 
                                            stopColor={gradientColors.first} 
                                            stopOpacity={(i + 1) / computedPath.svg.path.length}
                                        />
                                        <stop 
                                            offset="95%" 
                                            stopColor={gradientColors.last} 
                                            stopOpacity={(i + 1) / computedPath.svg.path.length}
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d={path.d}
                                    stroke={path.strokeColor}
                                    strokeWidth={path.strokeWidth}
                                    fill={`url(#${'gradient' + i})`}
                                    className="transition-all duration-500 ease-in-out delay-150"
                                />
                            </g>
                        ))
                    }
                </svg>
            </div>
        </div>
    );
};