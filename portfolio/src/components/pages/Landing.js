import React, { useState, useRef, useEffect } from 'react';
import "./../../styles/Landing.css";
import DesktopItem from '../common/DesktopItem';
import FolderWindow from '../common/FolderWindow';

const Landing = () => {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [folderPosition, setFolderPosition] = useState({ x: 0, y: 0 });
    const contentRef = useRef(null);

    // Fonction pour ouvrir le dossier
    const handleFolderClick = (e) => {
        const rect = contentRef.current.getBoundingClientRect(); // Position de content-desktop
        setIsFolderOpen(true);
        
        // Ajuster la position en fonction du décalage de content-desktop
        setFolderPosition({ 
            x: e.clientX - rect.left,
            y: e.clientY - rect.top 
        });
    };

    // Fonction pour fermer le dossier
    const handleCloseFolder = () => {
        setIsFolderOpen(false);
    };

    const handleTextFileClick = () => {
        alert('Fichier texte ouvert!');
    };

    const items = [
        { icon: 'Folder Opened.png', title: 'Projets', x: 100, y: 100, onClick: handleFolderClick },
        { icon: 'Generic Text Document.png', title: 'ReadMe.txt', x: 200, y: 200, onClick: handleTextFileClick }
    ];

    return (
        <div className="landing-container">
            <div className='content-desktop' ref={contentRef}>
                {items.map((item, index) => (
                    <DesktopItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        x={item.x}
                        y={item.y}
                        onClick={item.onClick}
                    />
                ))}

                {/* Affichage conditionnel de la fenêtre de dossier */}
                {isFolderOpen && (
                    <FolderWindow
                        title="Documents"
                        x={folderPosition.x}
                        y={folderPosition.y}
                        onClose={handleCloseFolder}
                    />
                )}
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
