import React from 'react';

import SplineBar from './SplineBar';
import OrientationBar from './OrientationBar';
import LayersList from './LayersList';
import InputGroup from '../InputGroup';
import ColorPicker from '../ColorPicker';

import { ReactComponent as Low } from '../../assets/waveLow.svg';
import { ReactComponent as High } from '../../assets/waveHigh.svg';
import { ReactComponent as Short } from '../../assets/waveShort.svg';
import { ReactComponent as Long } from '../../assets/waveLong.svg';
import { ReactComponent as Random } from '../../assets/random.svg';

export default function Panel({
    spline, 
    setSpline, 
    orientation, 
    setOrientation,
    complexity, 
    setComplexity, 
    height, 
    setHeight,
    layers, 
    addLayer, 
    setLayerID, 
    layerID,
    changeLayerColors
}) {  
    return (
        <div className="relative flex flex-col justify-center max-w-6xl mx-auto p-8 pb-16 bg-white shadow-sm rounded-xl">
            <div className="grid grid-rows-3 items-center md:grid md:grid-cols-3 md:grid-rows-none md:gap-8">
                <div className="w-full flex flex-col">
                    <div className="pb-2 flex items-center justify-start">
                        <SplineBar spline={spline} setSpline={setSpline} />
                        <OrientationBar orientation={orientation} setOrientation={setOrientation} />
                    </div>
                    <LayersList layers={layers} addLayer={addLayer} layerID={layerID} setLayerID={setLayerID} />
                </div>

                <div className="w-full flex flex-col">
                    <div className="flex flex-col items-center">
                        <InputGroup 
                            leftIcon={<Low className="fill-current" />} 
                            rightIcon={<High className="fill-current" />} 
                            value={height}
                            onChange={(value) => setHeight(value)}
                        />
                        <InputGroup 
                            leftIcon={<Short className="fill-current" />} 
                            rightIcon={<Long className="fill-current" />} 
                            value={complexity}
                            onChange={(value) => setComplexity(value)}
                        />
                    </div>
                </div>
                
                <div className="w-full flex flex-col">
                    <ColorPicker layer={layers.find(l => l.id === layerID)} changeColors={changeLayerColors} />
                </div>
            </div>   
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <button className="border-4 border-gray-100 px-6 py-4 flex items-center justify-center bg-indigo-400 text-white rounded-full transform transition-all hover:bg-indigo-600 hover:border-indigo-200 focus:outline-none">
                    <Random className="fill-current w-10 h-10 transform transition-all hover:scale-105 hover:rotate-90" />
                    <span className="ml-4 font-bold text-white text-lg">Generate</span>
                </button>  
            </div>
        </div>
    );
}