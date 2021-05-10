import React, { useState } from 'react';

import { Group, Button } from '../ButtonsGroup';

import { ReactComponent as Top } from '../../assets/top.svg';
import { ReactComponent as Bottom } from '../../assets/bottom.svg';

import { orientationTypes } from '../../utils/constants';


export default function OrientationBar() {
    const [orientation, setOrientation] = useState(orientationTypes.BOTTOM);

    return (
        <Group>
            <Button
            active={orientation === orientationTypes.BOTTOM}
            click={() => setOrientation(orientationTypes.BOTTOM)}  
            roundedStyle={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}}
            icon={<Bottom className="fill-current" />}
            />
            <Button
                active={orientation === orientationTypes.TOP}
                click={() => setOrientation(orientationTypes.TOP)}
                roundedStyle={{borderTopRightRadius: '.25rem', borderBottomRightRadius: '.25rem'}}
                icon={<Top className="fill-current" />}
            />
        </Group>
    );
}