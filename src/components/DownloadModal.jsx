import React from 'react';

import { ReactComponent as Close } from '../assets/cancel.svg';
import { useModal } from '../contexts/ModalContext';

export default function DownloadModal() {
    const { visible, svg, hide } = useModal();

    if (!visible) return null;

    const download = (href, name) => {
        const link = document.createElement('a');
        link.href = href;
        link.download = name;
        link.style.display = "none";

        link.click();
        link.remove();
    };

    const downloadAsSvg = () => {
        const copySvg = svg.cloneNode(true);
        ["class", "width", "height"].forEach(attr => copySvg.removeAttribute(attr));

        const file = new Blob([copySvg.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(file);
        download(url, 'wave.svg');
    };

    const downloadAsPng = () => {
        const { width, height } = svg.getBBox();
        const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
        const url = (window.URL || window.webkitURL || window).createObjectURL(blob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            const png = canvas.toDataURL('image/png');
            download(png, 'wave.png');
            canvas.remove();
        };
        img.src = url;
    };

    return (
        <div className="fixed z-20 inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center transition-all duration-500">   
            <div className="mx-4 h-auto max-w-2xl flex flex-grow rounded-md bg-white shadow-sm">
                <div className="w-full flex flex-col px-4 py-6 justify-center">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="font-bold text-gray-400 text-2xl">Download</h3>
                        <div className="pl-8 py-1 pr-1 rounded-full bg-gray-200">
                            <button
                                onClick={hide} 
                                className="p-2 rounded-full bg-gray-400 text-white ring-4 ring-transparent transition-colors duration-300    hover:bg-gray-500 focus:bg-gray-500  focus:outline-none"
                            >
                                <Close className="w-3 h-3 fill-current" />
                            </button>
                        </div>
                    </div>  
                    <div 
                        className="w-full mt-4 rounded-lg overflow-hidden"
                        dangerouslySetInnerHTML={{__html: svg.outerHTML}}
                    >
                    </div>
                    <div className="w-full mt-4 flex justify-end">
                        <button 
                            onClick={downloadAsSvg}
                            className="px-6 py-2 rounded-lg bg-indigo-400 text-white font-medium ring-4 ring-white transition-shadow duration-300 focus:outline-none focus:ring-indigo-200"
                        >
                            SVG
                        </button>
                        <button 
                            onClick={downloadAsPng}
                            className="px-6 py-2 rounded-lg bg-indigo-400 text-white ml-4 font-medium ring-4 ring-white transition-shadow duration-300 focus:outline-none focus:ring-indigo-200"
                        >
                            PNG
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}