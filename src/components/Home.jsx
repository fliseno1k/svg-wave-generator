import React from 'react';

import Header from './Header';

import Generator from './Generator';

export default function Home() { 
    return (
        <div className="relative min-h-screen h-screen">
            <Header />
            <main className="w-full">
                <div className="bg-gray-100 mx-auto px-2 pt-12 text-center md:pt-24 md:pb-16">
                    <h1 className="text-5xl font-bold text-gray-400">Make some waves!</h1>
                </div>
                <Generator />
            </main>
        </div>
    );
}
