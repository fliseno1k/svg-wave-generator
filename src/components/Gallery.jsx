import React, { useRef } from 'react';

import { ReactComponent as One } from '../assets/gallerysvgs/1.svg';
import { ReactComponent as Two } from '../assets/gallerysvgs/2.svg';
import { ReactComponent as Three } from '../assets/gallerysvgs/3.svg';
import { ReactComponent as Four } from '../assets/gallerysvgs/4.svg';
import { ReactComponent as Five } from '../assets/gallerysvgs/5.svg';
import { ReactComponent as Six } from '../assets/gallerysvgs/6.svg';
import { ReactComponent as Seven } from '../assets/gallerysvgs/7.svg';
import { ReactComponent as Eight } from '../assets/gallerysvgs/8.svg';
import { ReactComponent as Nine } from '../assets/gallerysvgs/9.svg';

import WaveCard from './WaveCard';

import { useModal } from '../contexts/ModalContext';


export default function Gallery() {
    const { show } = useModal();
    const icons = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];

    return(
        <div className="px-2 py-8">
            <div className="relative w-full max-w-7xl mx-auto">
                <div className="text-center pt-8 pb-16">
                    <h1 className="font-black text-4xl sm:text-7xl leading-none text-gray-700">
                        Create your own wave<br />
                        Or download from gallery.
                    </h1>
                </div>
            </div>  
            <div className="max-w-7xl py-4 mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {
                    icons.map((icon, i) => <WaveCard Icon={icon} download={show} />)
                }
            </div>  
        </div>
    );
}