import React, { useState } from 'react';

import Panel from './Panel';
import Canvas from './Canvas';

import createDefaultLayer from '../utils/createDefaultLayer';
import { waveInit } from '../wave';

import {
    defaultWaveConfig, 
} from '../utils/constants';

export default function Generator() {
    const [config, setConfig] = useState({ height: 500, complexity: 4 }); 

    const calcNewPath = (targetLayers) => {
        const defOpt = defaultWaveConfig;
        defOpt.layerCount = targetLayers.length + 1;
        const { svg } = waveInit(defOpt);
        targetLayers.forEach((layer, i) => {
            layer.path = svg.path[i];
        });

        return targetLayers;
    };

    const [layers, setLayers] = useState(calcNewPath([createDefaultLayer()]));
    const [layerID, setLayerID] = useState(layers[0].id);

    const handleConfigChange = (newConfig) => {
        setConfig({
            ...config, 
            ...newConfig
        });
    };

    const handleColorsChange = (newColors) => {
        const imLayers = [...layers];
        imLayers.find(l => l.id === layerID).colors = newColors;
        setLayers(imLayers);
    };

    return (
        <div className="bg-gray-100 px-2 pt-12 pb-16 box-border sm:px-8">
            <div className="w-full max-w-7xl flex mx-auto">
                <Canvas layers={layers} />
                <Panel 
                    config={config}
                    handleConfigChange={handleConfigChange}
                    handleColorsChange={handleColorsChange}
                />
            </div>
        </div>
    );
}