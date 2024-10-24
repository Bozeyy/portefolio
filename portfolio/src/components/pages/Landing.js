// src/components/pages/Landing.js
import React from 'react';
import "./../../styles/Landing.css";
import DesktopItem from '../common/DesktopItem';

const Landing = () => {
    const items = [
        { icon: 'Folder Opened.png', title: 'Documents', x: 100, y: 100 }
    ];

    return (
        <div className="landing-container">
            <div className='content-desktop'>
                {items.map((item, index) => (
                    <DesktopItem key={index} icon={item.icon} title={item.title} x={item.x} y={item.y} />
                ))}
            </div>
            <div className="task-bar">
                <div className="start-icon">
                    {/* Icône du bouton démarrer */}
                </div>
            </div>
        </div>
    );
};

export default Landing;
