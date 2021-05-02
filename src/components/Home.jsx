import React from 'react';

import { ReactComponent as Curve } from '../assets/curve.svg';
import { ReactComponent as Peak } from '../assets/peak.svg';
import { ReactComponent as Step } from '../assets/step.svg';

import { ReactComponent as Top } from '../assets/top.svg';
import { ReactComponent as Bottom } from '../assets/bottom.svg';

import { ReactComponent as Random } from '../assets/random.svg';

import { ReactComponent as Low } from '../assets/waveLow.svg';
import { ReactComponent as High } from '../assets/waveHigh.svg';
import { ReactComponent as Short } from '../assets/waveShort.svg';
import { ReactComponent as Long } from '../assets/waveLong.svg';



import Header from './Header';

export default function Home() {
    return (
        <div className="relative min-h-screen h-screen">
            <Header />
            <main className="w-full">
                <div className="mx-auto px-2 pt-12 text-center md:pt-24 md:pb-16">
                    <h1 className="text-5xl font-bold text-gray-400">Make some waves!</h1>
                </div>
                <div className="px-2 pt-12 pb-16 mx-auto box-border sm:px-8">
                    <div className="relative flex flex-col justify-center max-w-6xl mx-auto p-8 pb-16 bg-white shadow-lg rounded-lg">
                        <div className="grid grid-rows-3 items-center md:grid md:grid-cols-3 md:grid-rows-none md:gap-8">
                            <div className="w-full flex flex-col">
                                <div className="pb-2 flex items-center justify-start">
                                    <div className="flex mr-4 rounded-md bg-gray-100">
                                        <button className="w-10 h-10 flex items-center justify-center bg-indigo-400 text-white rounded-tl-md rounded-bl-md focus:outline-none focus:ring-4 focus:ring-indigo-200">
                                            <Curve className="fill-current" />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center text-gray-600">
                                            <Peak className="fill-current" />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-tr-md rounded-br-md">
                                            <Step className="fill-current" />
                                        </button>
                                    </div>
                                    <div className="flex rounded-md bg-gray-100">
                                        <button className="w-10 h-10 flex items-center justify-center bg-indigo-400 text-white rounded-tl-md rounded-bl-md focus:outline-none focus:ring-4 focus:ring-indigo-200">
                                            <Top className="fill-current" />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-tr-md rounded-br-md">
                                            <Bottom className="fill-current" />
                                        </button>  
                                    </div>
                                </div>
                                <ul className="flex p-2 whitespace-nowrap bg-gray-100 rounded-lg">
                                    <li className="mr-2">
                                        <div className="w-8 h-8 rounded-lg bg-blue-600 cursor-pointer"></div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="w-8 h-8 rounded-lg bg-blue-600 cursor-pointer"></div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="w-full flex flex-col">
                                <div className="flex flex-col items-center">
                                    <div className="w-full py-2 flex items-center justify-between">
                                        <div className="flex-none mr-3 text-gray-600">
                                            <Low className="fill-current" />
                                        </div>
                                        <input type="range" className="range-input flex-auto"></input>
                                        <div className="flex-none ml-3 text-gray-600">
                                            <High className="fill-current" />
                                        </div>
                                    </div>
                                    <div className="w-full py-2 flex items-center justify-between">
                                        <div className="flex-none mr-3 text-gray-600">
                                            <Short className="fill-current" />
                                        </div>
                                        <input type="range" className="range-input flex-auto"></input>
                                        <div className="flex-none ml-3 text-gray-600">
                                            <Long className="fill-current" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full flex flex-col">
                                <div className="flex flex-col item-center">
                                    <div className="relative w-full my-2">
                                        <div className="w-full h-8 bg-gradient-to-r from-indigo-200 to-indigo-600 rounded-lg"></div>
                                        <div className="absolute top-0 left-8 h-10 w-2 -mt-1 border-2 border-gray-600 bg-white ring-2 ring-offset-indigo-200 rounded-full cursor-pointer"></div>
                                        <div className="absolute top-0 left-64 h-10 w-2 -mt-1 border-2 border-gray-600 bg-white ring-2 ring-offset-indigo-200 rounded-full cursor-pointer"></div>
                                    </div>
                                    <div className="w-full flex items-center my-2">
                                        <div className="relative flex flex-grow">
                                            <div className="w-full h-8 bg-gradient-to-r from-indigo-200 to-indigo-600 rounded-lg"></div>
                                            <div className="absolute top-0 left-24 h-10 w-2 -mt-1 border-2 border-gray-600 bg-white ring-2 ring-offset-indigo-200 rounded-full cursor-pointer"></div>
                                        </div>
                                        <input className="ml-2 w-24 leading-8 px-2 bg-gray-100 rounded-lg outline-none transition-all focus:ring-2 focus:ring-indigo-100 focus:border-indigo-100" placeholder="#212121"></input>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                            <button className="w-20 h-20 flex items-center justify-center bg-indigo-400 text-white rounded-full transform transition-all hover:bg-indigo-600 hover:scale-105 hover:rotate-12">
                                <Random className="fill-current w-10 h-10" />
                            </button>  
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
