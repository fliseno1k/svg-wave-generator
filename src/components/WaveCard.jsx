import React, { useRef } from 'react';

import {ReactComponent as Download} from '../assets/download.svg';

export default function WaveCard({ Icon, download }) {
    const svgRef = useRef();

    return (
        <div className="relative w-full h-52 flex align-bottom bg-white col-span-1 rounded-lg overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 z-10">
                <button 
                    onClick={() => download(svgRef.current)}
                    className="pt-2 pr-2 pl-4 pb-4 text-white bg-indigo-400 rounded-bl-full ring-4 ring-white transition-shadow duration-300 outline-none focus:outline-none focus:ring-indigo-200"
                >
                    <Download className="h-6 w-6"/>
                </button>
            </div>
            <div className="absolute bottom-0 w-full">
                <Icon ref={svgRef} />
            </div>
        </div>
    );
}