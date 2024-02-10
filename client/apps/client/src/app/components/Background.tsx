import React, { useState } from "react";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.webp';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';

export const Background = () => {
    // State management for cycling through an array of image URLs.
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const [index, setIndex] = useState(0);

    // Function to advance to the next image in the array, looping back to the first after the last image.
    const bgChange = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Style object for the container div. It sets the full viewport height and width, centers its children,
    // and applies the current background image with styling to cover the entire viewport without repeating.
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

    // Style object for the button that changes the background image. It is absolutely positioned
    // in the top left corner of the viewport and styled for visibility and interactivity.
    const buttonStyle: React.CSSProperties = {
        padding: '8px 16px',
        display: 'flex',
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
        // The container div applies the background image styling and contains the button for changing the background.
        <div style={containerStyle}>
            <button onClick={bgChange} style={buttonStyle}>
                {/* The ArrowPathIcon from Heroicons to visually indicate the button's purpose. */}
                <ArrowPathIcon style={{ width: '24px', height: '24px' }}/>
                <span>change your background!</span>
            </button>
        </div>
    );
};
