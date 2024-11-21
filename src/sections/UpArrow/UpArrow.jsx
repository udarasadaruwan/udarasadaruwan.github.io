import React, { useState, useEffect } from 'react';
import './UpArrow.css';

function UpArrow() {
    const [visible, setVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {visible && (
                <button className="up-arrow" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </div>
    );
}

export default UpArrow;
