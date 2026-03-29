import React from 'react';

const Loader = () => {
    return (
       <div className="flex items-center justify-center space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-600"></div>
    </div>
    );
};

export default Loader;