// components/Common/GlobalLoading.tsx
import React from 'react';

interface GlobalLoadingProps {
    isVisible: boolean;
    onAnimationEnd: () => void;
}

const GlobalLoading: React.FC<GlobalLoadingProps> = ({ isVisible, onAnimationEnd }) => {
    return (
        <div
            className={`
                fixed inset-0 z-50 flex items-center justify-center 
                bg-black transition-transform duration-700
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
            onTransitionEnd={() => {
                if (!isVisible) onAnimationEnd();
            }}
        >
            <div className="relative">
                <div className="w-20 h-20 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 animate-ping"></div>
            </div>

            {/* Loading text */}
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                    {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, index) => (
                        <span
                            key={index}
                            className="text-white text-lg font-medium animate-pulse"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animationDuration: '1s'
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlobalLoading;

