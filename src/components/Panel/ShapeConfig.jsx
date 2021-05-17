import React from 'react';
import RangeSlider from './RangeSlider';

import { ReactComponent as Low } from '../../assets/waveLow.svg';
import { ReactComponent as High } from '../../assets/waveHigh.svg';
import { ReactComponent as Short } from '../../assets/waveShort.svg';
import { ReactComponent as Long } from '../../assets/waveLong.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';

import {
    heightRange, 
    complexityRange,
    layersCountRange
} from '../../utils/constants'

export default function GeometryConfig({ 
    config, 
    handleConfigChange 
}) {
    return (
        <div className="w-full flex flex-col">
            <RangeSlider 
                title="Height"
                { ...heightRange }
                value={config.height}
                leftIcon={<Low className="w-5 h-5 fill-current" />} 
                rightIcon={<High className="w-5 h-5 fill-current" />}
                handleChange={(height) => handleConfigChange({ height })}
            />
            <RangeSlider
                title="Complexity"
                { ...complexityRange }
                value={config.segmentCount}
                leftIcon={<Short className="w-5 h-5 fill-current" />} 
                rightIcon={<Long className="w-5 h-5 fill-current" />} 
                handleChange={(segmentCount) => handleConfigChange({ segmentCount })}
            />
            <RangeSlider
                title="Layers Count"
                { ...layersCountRange }
                value={config.layersCount}
                leftIcon={<Minus className="w-5 h-5 fill-current" />} 
                rightIcon={<Plus className="w-5 h-5 fill-current" />} 
                handleChange={(layersCount) => handleConfigChange({ layersCount })}
            />
        </div>
    );
}