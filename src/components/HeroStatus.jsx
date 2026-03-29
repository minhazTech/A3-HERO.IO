import React from 'react';
import hero from '../assets/hero.png';

const HeroStatus = () => {
    return (
        <div className="flex flex-col">
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-20 text-center">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <h1 className="text-2xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                        We Build <span className="text-indigo-600">Productive</span> Apps
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-40 mt-8  mx-auto text-center">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4  mx-auto mt-8">
                    <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-sm bg-black px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 w-full sm:w-auto gap-2"
                    >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" referrerPolicy="no-referrer" />
                    </a>
                    <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-8 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 w-full sm:w-auto gap-2 border border-slate-200"
                    >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" referrerPolicy="no-referrer" />
                    </a>
                </div>
                <div className="mt-16 flex justify-center items-center py-0">
                <img src={hero} alt="App Preview" className="max-w-full h-auto object-contain" />
                </div>
            </div>
      </section>

   
            <section className="bg-indigo-600 py-10 text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-10 ">
                       <h2 className="!text-4xl md:text-6xl font-bold text-white leading-tight">
                           Trusted By Millions, Built For You
                       </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                        <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-indigo-200 uppercase tracking-wider">Total Downloads</span>
                        <span className="text-5xl font-bold">29.6M</span>
                        <span className="text-xs text-indigo-300">21% More Than Last Month</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-indigo-200 uppercase tracking-wider">Total Reviews</span>
                        <span className="text-5xl font-bold">906K</span>
                        <span className="text-xs text-indigo-300">46% More Than Last Month</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-indigo-200 uppercase tracking-wider">Active Apps</span>
                        <span className="text-5xl font-bold">132+</span>
                        <span className="text-xs text-indigo-300">31 More Will Launch</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
         
    );
};

export default HeroStatus;