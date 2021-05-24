import React from 'react';

import { ReactComponent as Instagram } from '../assets/social/instagram.svg';
import { ReactComponent as VK } from '../assets/social/vk.svg';
import { ReactComponent as Twitter } from '../assets/social/twitter.svg';
import { ReactComponent as Coffe } from '../assets/social/buymeacoffee.svg';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100">
            <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-6 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:m-0">
                    <a href="/" className="flex items-center bg-indigo-400 rounded-lg px-4 py-2 text-white focus:outline-none">
                        <Coffe className="h-8 fill-current" />
                        <span className="ml-2 font-medium">Buy me a coffee</span>
                    </a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <a href="https://www.buymeacoffee.com/alexeyfl" className="inline focus:outline-none text-indigo-400">
                        <VK className="inline-block h-8 fill-current" />
                    </a>
                    <a href="https://twitter.com/alexeyfl_" className="inline focus:outline-none text-indigo-400">
                        <Twitter className="inline-block h-8 fill-current" />
                    </a>
                    <a href="https://www.instagram.com/alekseifl/" className="inline focus:outline-none text-indigo-400">
                        <Instagram className="inline-block h-8 fill-current" />
                    </a>
                </div>
            </div>
        </footer>
    );
}