import React from 'react';
import RangeInput from '../RangeInput';

import { ReactComponent as Low } from '../../assets/waveLow.svg';
import { ReactComponent as High } from '../../assets/waveHigh.svg';
import { ReactComponent as Short } from '../../assets/waveShort.svg';
import { ReactComponent as Long } from '../../assets/waveLong.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';

export default function GeometryConfig({ config, handleConfigChange }) {
    return (
        <div className="w-full flex flex-col">
            <RangeInput 
                title="Height"
                leftIcon={<Low className="w-5 h-5 fill-current" />} 
                rightIcon={<High className="w-5 h-5 fill-current" />}
                leftShift={() => console.log('down')}
                rightShift={() => console.log('up')} 
            />
            
            <RangeInput
                title="Complexity"
                leftIcon={<Short className="w-5 h-5 fill-current" />} 
                rightIcon={<Long className="w-5 h-5 fill-current" />} 
                value={config.complexity}
                onChange={(value) => handleConfigChange({ complexity: value })}
            />
            <RangeInput
                title="Wave Count"
                leftIcon={<Minus className="w-5 h-5 fill-current" />} 
                rightIcon={<Plus className="w-5 h-5 fill-current" />} 
                // value={config.complexity}
                // onChange={(value) => handleConfigChange({ complexity: value })}
            />
        </div>
    );
};