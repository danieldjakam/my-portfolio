import * as React from 'react';

export default function CustomBtn({text, color, bgColor, onClick, className}) {
    const c = color ? `${color}` : 'text-white';
    const b = bgColor ? `${bgColor}` : 'bg-primary';
    return (
        <button onClick={onClick} className={`${c} rounded-md ${b} py-2 px-2 ${className}`}>
            {text}
        </button>
    );
}
