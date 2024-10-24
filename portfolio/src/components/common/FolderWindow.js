// src/components/common/FolderWindow.js
import React from 'react';
import "./../../styles/FolderWindow.css"; // Créez ce fichier CSS pour styliser votre fenêtre

const FolderWindow = ({ title, x, y, onClose }) => {
    return (
        <div className="folder-window" style={{ top: y, left: x }}>
            <div className="folder-header">
                {/* div ;FOLDWIN_left_header */}
                <div className="folder-header-left">
                    {/* icon folder */}
                    <img src={require(`../../assets/icons/Windows XP Icons/Network Folder.png`)} alt="Folder" />
                    <span>{title}</span>
                </div>
                {/* div ;FOLDWIN_right_header */}
                <div className="folder-header-right">
                    <img src={require(`../../assets/icons/Windows XP Icons/Minimize.png`)} alt="Folder" onClick={onClose}/>
                    <img src={require(`../../assets/icons/Windows XP Icons/Maximize.png`)} alt="Folder" onClick={onClose}/>
                    <img src={require(`../../assets/icons/Windows XP Icons/Exit.png`)} alt="Folder" onClick={onClose}/>
                </div>
            </div>
            <div className="folder-content">
                <div className="folder-header-content">
                    <a>File</a>
                    <a>Edit</a>
                    <a>View</a>
                    <a>Favorite</a>
                    <a>Tools</a>
                    <a>Help</a>
                </div>

            </div>
        </div>
    );
};

export default FolderWindow;
