import React from 'react';

type ImageIconProps = {
    fill?: string;
    className?: string;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
};

const ImageIcon: React.FC<ImageIconProps> = ({ fill = 'white', className = '', onClick }) => {
    return (
        <svg
            width="171"
            height="171"
            viewBox="0 0 171 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
        >
            <path
                d="M135.375 149.625H35.625C27.7549 149.625 21.375 143.245 21.375 135.375V35.625C21.375 27.7549 27.7549 21.375 35.625 21.375H135.375C143.245 21.375 149.625 27.7549 149.625 35.625V135.375C149.625 143.245 143.245 149.625 135.375 149.625ZM35.625 35.625V135.375H135.375V35.625H35.625ZM128.25 121.125H42.75L64.125 92.625L71.25 99.75L92.625 71.25L128.25 121.125ZM60.5625 78.375C54.66 78.375 49.875 73.59 49.875 67.6875C49.875 61.785 54.66 57 60.5625 57C66.465 57 71.25 61.785 71.25 67.6875C71.25 73.59 66.465 78.375 60.5625 78.375Z"
                fill={fill}
            />
        </svg>
    );
};

export default ImageIcon;
