import React from 'react';

import { ModalProvider } from '../contexts/ModalContext';

import Header from './Header';
import Generator from './Generator';
import DownloadModal from './DownloadModal';

export default function Home() { 
    return (
        <div className="relative min-h-screen">
            <ModalProvider>
                <Header />
                <main className="w-full">
                    <Generator />
                </main>
                <DownloadModal />
            </ModalProvider>
        </div>
    );
}
