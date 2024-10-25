// src/components/common/FolderWindow.js
import React from 'react';
import Draggable from 'react-draggable';
import "./../../styles/FolderWindow.css"; // Créez ce fichier CSS pour styliser votre fenêtre

const FolderWindow = ({ title, x, y, onClose }) => {
    return (
        <Draggable handle=".folder-header" defaultPosition={{ x, y }}>
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
                        <img src={require(`../../assets/icons/Windows XP Icons/Minimize.png`)} alt="Folder" onClick={onClose} />
                        <img src={require(`../../assets/icons/Windows XP Icons/Maximize.png`)} alt="Folder" onClick={onClose} />
                        <img src={require(`../../assets/icons/Windows XP Icons/Exit.png`)} alt="Folder" onClick={onClose} />
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
                    <div className="folder-sousheader-content">
                        <div className="sousheader-items-left">
                            <div className="sousheader-items">
                                <img src={require(`../../assets/icons/Windows XP Icons/Back.png`)} />
                                <span>Back</span>
                                <p className="triB">▼</p>
                            </div>
                            <div className="sousheader-items">
                                <img src={require(`../../assets/icons/Windows XP Icons/Forward.png`)} />
                                <span> </span>
                                <p className="triB">▼</p>
                            </div>
                            <div className="sousheader-items lastItem">
                                <img src={require(`../../assets/icons/Windows XP Icons/Up.png`)} />
                            </div>
                        </div>
                        <div className="sousheader-items-mid">
                            <div className="sousheader-items">
                                <img src={require(`../../assets/icons/Windows XP Icons/Search.png`)} />
                                <span>Search</span>
                            </div>
                            <div className="sousheader-items lastItem">
                                <img src={require(`../../assets/icons/Windows XP Icons/Folder View.png`)} />
                                <span>Folders</span>
                            </div>
                        </div>
                        <div className="sousheader-items-right">
                            <div className="sousheader-items">
                                <img src={require(`../../assets/icons/Windows XP Icons/Icon View.png`)} />
                                <p className="triB">▼</p>
                            </div>
                        </div>
                    </div>
                    <div className="folder-path-section">
                        <span>Address</span>
                        <div className="folder-path">
                            <img src={require(`../../assets/icons/Windows XP Icons/My Documents.png`)} alt="Folder" onClick={onClose} />
                            <input type="text" value="My Documents" />
                            <img src={require(`../../assets/icons/Windows XP Icons/My Documents.png`)} alt="Folder" onClick={onClose} />
                        </div>
                        <div className="path-btngo">
                            <a>
                                <img src={require(`../../assets/icons/Windows XP Icons/Go.png`)} alt="Folder" onClick={onClose} />
                                Go
                            </a>
                        </div>
                    </div>
                    <div className="folder-content-section">
                        <div className="left_section">
                            <div className="left_section_header">
                                <span>Folders</span>
                                <button>x</button>
                            </div>
                            <div className="left_section_navig">
                                <div className="section_item">
                                    <img src={require(`../../assets/icons/Windows XP Icons/Desktop.png`)} alt="Folder" onClick={onClose} />
                                    <span>Desktop</span>
                                </div>
                                <div className="section_item">
                                    {/* tab */}
                                    &nbsp;&nbsp;
                                    <button>-</button>
                                    <img src={require(`../../assets/icons/Windows XP Icons/My Documents.png`)} alt="Folder" onClick={onClose} />
                                    <span>Projets</span>
                                </div>
                                <div className="section_item">
                                    {/* tab */}
                                    &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;
                                    <img src={require(`../../assets/icons/Windows XP Icons/Folder Closed.png`)} alt="Folder" onClick={onClose} />
                                    <span>Dossier</span>
                                </div>
                            </div>
                            <div className="left_section_footer">
                                {/* scrollbar vertical */}
                                <div className="scrollbar">
                                    <div className="thumb"></div>

                                </div>
                            </div>

                        </div>
                        <div className="right_section">
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default FolderWindow;
