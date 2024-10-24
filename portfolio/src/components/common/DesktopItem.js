import React from 'react';
import Draggable from 'react-draggable';
import "./../../styles/Landing.css";

const DesktopItem = ({ icon, title, x, y }) => {

    // Utilisation de require pour importer dynamiquement l'image
    const imgPath = require(`../../assets/icons/Windows XP Icons/${icon}`);

    return (
        <Draggable defaultPosition={{ x, y }}> 
            <div className="desktop-item" style={{ gridRowStart: Math.floor(y / 100) + 1, gridColumnStart: Math.floor(x / 100) + 1 }}>
                <div className="item">
                    <img src={imgPath} alt={title} />
                    <p>{title}</p>
                </div>
            </div>
        </Draggable>
    );
};

export default DesktopItem;
