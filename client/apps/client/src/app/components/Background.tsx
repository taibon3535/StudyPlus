import React, { useState } from "react";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.webp';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

export const Background = () => {
    const images = [img1, img2, img3, img4, img5, img6]; 
    const [index, setIndex] = useState(0); 

    
    const bgChange = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

   
    const containerStyle = {
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundImage: `url(${images[index]})`, 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
    };

    return (
        <div style={containerStyle}>
            <button onClick={bgChange} style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                outline: 'none',
            }}>
                Change Background
            </button>
        </div>
    );
};
