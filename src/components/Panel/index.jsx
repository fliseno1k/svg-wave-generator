import React from 'react';

import ShapeConfig from './ShapeConfig';
import GradientPicker from './GradientPicker';

import { ReactComponent as Random } from '../../assets/random.svg';
import { ReactComponent as Download } from '../../assets/download.svg';


export default function Panel({
    config,
    handleConfigChange,
    gradient, 
    handleGradientChange,
    randomize,
    download
}) {  
    return (
        <div className="relative w-96 p-8 pb-16 bg-white rounded-xl">
            <div className="flex flex-col">
                <div className="w-full flex flex-col">
                    <ShapeConfig config={config} handleConfigChange={handleConfigChange} />
                    <GradientPicker gradient={gradient} handleGradientChange={handleGradientChange} />
                </div>
            </div>   
            <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <button 
                    onClick={randomize} 
                    className="border-4 border-gray-100 px-6 py-4 flex items-center justify-center bg-indigo-400 text-white rounded-full transform transition-all hover:bg-indigo-600 hover:border-indigo-200 focus:outline-none focus:border-indigo-200"
                >
                    <Random className="fill-current w-8 h-8" />
                    <span className="ml-4 font-bold text-white text-lg">Generate</span>
                </button> 
                <button 
                    onClick={download}
                    className="border-4 border-gray-100 p-4 ml-2 bg-indigo-400 text-white rounded-full transition-all hover:border-indigo-200 hover:bg-indigo-600 focus:outline-none focus:border-indigo-200"
                >
                    <Download className="w-8 h-8" />
                </button> 
            </div>
        </div>
    );
}