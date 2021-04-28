import React from 'react';

import WaveIcon from '../assets/wave.png';
import GitHubIcon from '../assets/github.svg';

export default function Header() {
    return (
        <header className="w-full h-16 shadow-lg bg-white">
            <div className="max-w-7xl px-4 mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={WaveIcon} width="60" alt="Wave" />
                    <div className="hidden ml-2 md:block">
                        <span className="font-sans font-bold text-2xl text-blue-200">Wavify</span>
                    </div>
                </div>    
                <div className="flex items-center">
                    <a className="cursor-pointer">
                        <img src={GitHubIcon} alt="Github" width="30"/>
                    </a>
                </div>
            </div>
        </header>
    );
}