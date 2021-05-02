import React from 'react';

import { ReactComponent as WaveIcon } from '../assets/wave.svg';
import { ReactComponent as GitHubIcon } from '../assets/github.svg';

export default function Header() {
    return (
        <header className="w-full h-16 shadow-lg bg-white">
            <div className="max-w-7xl h-full px-4 mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <WaveIcon width="60" alt="Wave" />
                    <div className="hidden ml-2 md:block">
                        <span className="font-sans font-bold text-2xl text-indigo-200">Wavify</span>
                    </div>
                </div>    
                <div className="flex items-center">
                    <a href="/" className="cursor-pointer rounded-full text-indigo-200 transition-colors">
                        <GitHubIcon width="30" alt={"Github"} className="fill-current" />
                    </a>
                </div>
            </div>
        </header>
    );
}