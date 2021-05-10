import React, { useState } from 'react';

import { Group, Button } from '../ButtonsGroup';

import { ReactComponent as Curve } from '../../assets/curve.svg';
import { ReactComponent as Peak } from '../../assets/peak.svg';
import { ReactComponent as Step } from '../../assets/step.svg';

import { splineTypes } from '../../utils/constants';

export default function SplineBar() {
    const [spline, setSpline] = useState(splineTypes.CURVE);

    return (
        <Group>
            <Button
                active={spline === splineTypes.CURVE}
                click={() => setSpline(splineTypes.CURVE)}
                roundedStyle={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}}
                icon={<Curve className="fill-current" />}
            />
            <Button
                active={spline === splineTypes.STEP}
                click={() => setSpline(splineTypes.STEP)}
                icon={<Step className="fill-current" />}
            />
            <Button
                active={spline === splineTypes.PEAK}
                click={() => setSpline(splineTypes.PEAK)}
                roundedStyle={{borderTopRightRadius: '.25rem', borderBottomRightRadius: '.25rem'}}
                icon={<Peak className="fill-current" />}
            />
        </Group>
    );
}