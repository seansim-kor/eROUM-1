import React from 'react';

interface LogoProps {
    colorClass?: string;
}

export const Logo: React.FC<LogoProps> = ({ colorClass = "text-primary" }) => (
    <div className={`size-8 ${colorClass}`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40Z" fill="currentColor" opacity="0.3"></path>
            <path d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C29.52 34 34 29.52 34 24C34 18.48 29.52 14 24 14Z" fill="currentColor"></path>
        </svg>
    </div>
);