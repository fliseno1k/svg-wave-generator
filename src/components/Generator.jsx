import React, { Profiler, useEffect, useRef, useState } from 'react';
import { useModal } from '../contexts/ModalContext';

import Panel from './Panel';
import Canvas from './Canvas';

import { waveInit } from '../wave';
import { defaultConfig } from '../utils/constants';


export default function Generator() {
    const [config, setConfig] = useState(defaultConfig); 
    const [computedPath, setComputedPath] = useState(waveInit(config));
    const [gradientColors, setGradientColors] = useState({
        first: '#002bdc',
        last: '#32ded4',
    });
    const svgRef = useRef();
    const { show } = useModal();

    useEffect(() => {
        setComputedPath(waveInit(config));
    }, [config]);

    const handleConfigChange = (changedConfig) => {
        setConfig(prev => {
            return { ...prev, ...changedConfig };
        });
    };

    const handleGradientChange = (changedGradient) => {
        setGradientColors(prev => {
            return { ...prev, ...changedGradient }
        });
    };

    const randomize = () => {
        setComputedPath(waveInit(config));
    };

    const download = () => {
        show(svgRef.current);
    };

    return (
        <Profiler id="prf">
        <div className="bg-gray-100 px-2 pt-12 pb-16 box-border sm:px-8">
            <div className="w-full max-w-7xl flex mx-auto">
                <Canvas 
                    forwardedRef={svgRef}
                    computedPath={computedPath} 
                    gradientColors={gradientColors}
                />
                <Panel 
                    config={config}
                    handleConfigChange={handleConfigChange}
                    gradient={gradientColors}
                    handleGradientChange={handleGradientChange}
                    randomize={randomize}
                    download={download}
                />
            </div>
        </div>
        </Profiler>
    );
}