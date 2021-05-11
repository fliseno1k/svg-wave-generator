import React from 'react';

import { ReactComponent as Add } from '../../assets/add.svg';


export default function LayersList({ layerID, layers, setLayerID, addLayer }) {

    return (
        <div className=" bg-gray-100 rounded-lg overflow-x-auto">
            <ul className="m-2 flex whitespace-nowrap">
                <li className="mr-2">
                    <div 
                        className="w-8 h-8 rounded-lg cursor-pointer text-indigo-400 bg-indigo-200 flex items-center justify-center"
                        onClick={addLayer}
                    >
                        <Add className="w-4 h-4 fill-current" />
                    </div>
                </li> 
                {
                    layers.map(layer => (
                        <li  key={layer.id} className="mr-2">
                            <div 
                                className={`w-8 h-8 rounded-lg cursor-pointer transition-all ${layer.id === layerID ? "ring-4 ring-indigo-200" : ''}`}
                                style={{ background: `linear-gradient(to right, ${layer.colors.map(color => `rgba(${color.color.join(', ')}, 1)` + ' ' + color.offset + '%').join(', ')})`}}
                                onClick={() => setLayerID(layer.id)}
                            ></div>
                        </li>
                    ))
                }               
            </ul>
        </div>
    );
}