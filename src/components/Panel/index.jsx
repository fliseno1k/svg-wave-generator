import React from 'react';

import ShapeConfig from './ShapeConfig';

import { ReactComponent as Random } from '../../assets/random.svg';


export default function Panel({
    config,
    handleConfigChange,
    randomize
}) {  
    return (
        <div className="relative w-96 mx-auto p-8 pb-16 bg-white rounded-xl">
            <div className="flex flex-col">
                <div className="w-full flex flex-col">
                    <ShapeConfig config={config} handleConfigChange={handleConfigChange} />
                </div>
            </div>   
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <button onClick={randomize} className="border-4 border-gray-100 px-6 py-4 flex items-center justify-center bg-indigo-400 text-white rounded-full transform transition-all hover:bg-indigo-600 hover:border-indigo-200 focus:outline-none">
                    <Random className="fill-current w-8 h-8 transform transition-all hover:scale-105 hover:rotate-90" />
                    <span className="ml-4 font-bold text-white text-lg">Generate</span>
                </button>  
            </div>
        </div>
    );
}