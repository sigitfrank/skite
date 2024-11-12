import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorFallback: React.FC = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops❗</h1>
            <p className="text-2xl text-gray-600 mb-8">Something went wrong</p>
            <button
                onClick={goHome}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Go to Home
            </button>
        </div>
    );
};

export default ErrorFallback;
