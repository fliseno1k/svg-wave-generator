import React, { useState } from 'react';

import Panel from './Panel';

import {
    splineTypes, 
    orientationTypes 
} from '../utils/constants';

import createDefaultLayer from '../utils/createDefaultLayer';

export default function Generator() {
    const [spline, setSpline] = useState(splineTypes.CURVE);
    const [orientation, setOrientation] = useState(orientationTypes.BOTTOM);
    const [height, setHeight] = useState(10);
    const [complexity, setComplexity] = useState(10);
    const [layers, setLayers] = useState([createDefaultLayer()]);
    const [layerID, setLayerID] = useState(layers[0].id);
    
    const addLayer = () => {
        const newLayer = createDefaultLayer();
        setLayers([newLayer, ...layers]);
        setLayerID(newLayer.id);
    }

    const changeLayerColors = (newColors) => {
        const newLayers = [...layers];
        newLayers.find(l => l.id === layerID).colors = newColors;
        setLayers(newLayers);
    }

    return (
        <>
            <div className="bg-gray-100 px-2 pt-12 pb-16 mx-auto box-border sm:px-8">
                <Panel 
                    spline={spline}
                    setSpline={setSpline}
                    orientation={orientation}
                    setOrientation={setOrientation}
                    height={height}
                    setHeight={setHeight}
                    complexity={complexity}
                    setComplexity={setComplexity}
                    layers={layers}
                    layerID={layerID}
                    setLayerID={setLayerID}
                    addLayer={addLayer}
                    changeLayerColors={changeLayerColors}
                />
            </div>
        </>
    );
}