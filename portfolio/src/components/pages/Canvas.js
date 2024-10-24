// src/components/pages/Canvas.js
import React, { useRef, useEffect } from 'react';
import Elem from '../common/Elem'; // Importer la classe Elem

const Canvas = ({ width, height }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // On définit la résolution du canvas 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 48;

        // On définit la taille d'un élément sur le bureau
        let sizeElem = Math.floor(canvas.height / 7);
        let startx = 0;

        if (canvas.width % sizeElem !== 0) {
            startx = Math.floor((canvas.width % sizeElem) / 2);
        }

        let nbCol = Math.floor(canvas.width / sizeElem);
        let nbRow = 7; 

        // On dessine une grille
        for (let i = 0; i < nbCol; i++) {
            for (let j = 0; j < nbRow; j++) {
                context.strokeStyle = "black";
                context.strokeRect(startx + i * sizeElem, j * sizeElem, sizeElem, sizeElem);
            }
        }

        // Fonction pour corriger les coordonnées de l'élément
        const correctCoord = (elem) => {
            const correctedX = Math.floor(elem.x / sizeElem) * sizeElem + startx; // Aligner à gauche
            const correctedY = Math.floor(elem.y / sizeElem) * sizeElem; // Aligner en haut
            return { x: correctedX, y: correctedY };
        };

        // Tableau d'éléments
        let elemArray = [];
        elemArray.push(new Elem("Folder Opened.png", "test folder", 193, 563));

        // Dessiner les éléments
        elemArray.forEach(elem => {
            const { x, y } = correctCoord(elem); // Appliquer la correction
            elem.x = x;
            elem.y = y;

            elem.dessiner(context, sizeElem); 
        });

        console.log("Canvas width: ", canvas.width);
        console.log("Canvas height: ", canvas.height);
        console.log("Size of an element: ", sizeElem);

    }, []);

    return <canvas ref={canvasRef} width={width} height={height} className="canvas-style" />;
};

export default Canvas;
