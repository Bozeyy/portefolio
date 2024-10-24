import React, { useState } from 'react';
import "./../../styles/Landing.css";
import DesktopItem from '../common/DesktopItem';
import FolderWindow from '../common/FolderWindow'; // Importer la fenêtre de dossier

const Landing = () => {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [folderPosition, setFolderPosition] = useState({ x: 0, y: 0 });

    // Fonction pour ouvrir le dossier
    const handleFolderClick = (e) => {
        setIsFolderOpen(true);
        setFolderPosition({ x: e.clientX, y: e.clientY }); // Positionner la fenêtre là où on clique
    };

    // Fonction pour fermer le dossier
    const handleCloseFolder = () => {
        setIsFolderOpen(false);
    };

    const handleTextFileClick = () => {
        alert('Fichier texte ouvert!');
    };

    const items = [
        { icon: 'Folder Opened.png', title: 'Documents', x: 100, y: 100, onClick: handleFolderClick },
        { icon: 'Generic Text Document.png', title: 'ReadMe.txt', x: 200, y: 200, onClick: handleTextFileClick }
    ];

    return (
        <div className="landing-container">
            <div className='content-desktop'>
                {items.map((item, index) => (
                    <DesktopItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        x={item.x}
                        y={item.y}
                        onClick={item.onClick}  // Passer l'événement onClick
                    />
                ))}

                {/* Affichage conditionnel de la fenêtre de dossier */}
                {isFolderOpen && (
                    <FolderWindow
                        title="Documents"
                        x={folderPosition.x}
                        y={folderPosition.y}
                        onClose={handleCloseFolder}  // Fonction de fermeture
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
