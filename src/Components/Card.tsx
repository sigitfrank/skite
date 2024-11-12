import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const Card = ({ children, className = '', style }: CardProps) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md w-[350px] h-36 ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Card;
