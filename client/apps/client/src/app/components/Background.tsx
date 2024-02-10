import React, { useState } from "react";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.webp';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import  ArrowPathIcon  from '@heroicons/react/24/outline/ArrowPathIcon';

export const Background = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    const [index, setIndex] = useState(0);

    const bgChange = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    
    const containerStyle: React.CSSProperties = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${images[index]})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative', 
    };

    
    const buttonStyle: React.CSSProperties = {
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        outline: 'none',
        position: 'absolute', 
        top: '20px', 
        left: '20px',
    };

    return (
        <div style={containerStyle}>
            <button onClick={bgChange} style={buttonStyle}>
                <ArrowPathIcon style={{ width: '24px', height: '24px' }}/>
            </button>
        </div>
    );
};
