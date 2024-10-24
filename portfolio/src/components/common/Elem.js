// src/components/common/Elem.js
class Elem {
    constructor(nomIcon, titre, x, y) {
        this.nomIcon = nomIcon; // Nom de l'icône
        this.titre = titre; // Titre de l'élément
        this.x = x; // Position x
        this.y = y; // Position y
    }

    dessiner(context, sizeElem) {
        const img = new Image();
        img.src = require(`../../assets/icons/Windows XP Icons/${this.nomIcon}`);
        img.onload = () => {
            context.drawImage(img, this.x + (sizeElem*0.2), this.y+ (sizeElem*0.1), sizeElem * 0.6, sizeElem * 0.6);
        };

        // on écrit le titre sous l'icône
        context.font = "12px Tahoma";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(this.titre, this.x + sizeElem / 2, this.y+ (sizeElem*0.7) + 15);
    }
}

export default Elem;
