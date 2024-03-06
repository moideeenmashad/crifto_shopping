import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button id="back-to-top" className='btn btn-dark' onClick={handleBackToTop}>
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
