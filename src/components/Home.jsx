import React, { Profiler } from 'react';

import { ModalProvider } from '../contexts/ModalContext';

import Header from './Header';
import Generator from './Generator';
import DownloadModal from './DownloadModal';
import Gallery from './Gallery';
import Footer from './Footer';

export default function Home() { 
    return (
        <Profiler>
            <ModalProvider>
                <div className="relative min-h-screen">
                    <Header />
                    <main className="w-full">
                        <Generator />
                        <Gallery />
                    </main>
                    <Footer />
                    <DownloadModal />
                </div> 
            </ModalProvider>
        </Profiler>
    );
}
