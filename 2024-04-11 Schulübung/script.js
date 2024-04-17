class Kassa {#geldlade
    constructor() {
        this.#geldlade = 10;
    }

    scannen(artikel) {
        console.log(`Artikel gescannt: ${artikel.name} - Preis: ${artikel.preis} €`);
        return artikel.preis;
    }

    bezahlen(betrag, preis) {
        if (betrag < preis) {
            throw new Error('Nicht genug Geld bezahlt!');
        }
        else { 
        this.#geldlade = this.#geldlade + preis;
        const rueckgeld = betrag - preis;
        console.log(`Bezahlt: ${preis.toFixed(2)} € - Rückgeld: ${rueckgeld.toFixed(2)} €`);
        return rueckgeld;
        }
    }

    toString() {
        return `Heute ${(this.#geldlade - 10).toFixed(2)} € eingenommen.`;
    }
    
}


const artikel = {'name': 'Cola', 'preis': 1.89};


const kassa = new Kassa();
const preis = kassa.scannen(artikel);
const rueckgeld = kassa.bezahlen(2.50, preis);
console.log(kassa.toString());






//class Kassa 
//    
//    #geldLade;
//    scannen(artikel);
//    bezahlen(betrag);
//        -ist der btarg ausreichen(wenn nicht dann error)
//        -tatsächlichen preis in die geldlde geben
//        -rechnung schreiben mit retourgeld
//
//toString() .. heute xy € eingommen
//
//artikel
//{'name': 'Cola', 'preis': 1.89}


//Test
//wir bekommen ein index.html und müssen dazu eine script.js schreiben
//gemeinsam soll es dann im Browser funktionieren
//Supermarkt HÜ ist bis zum 17.4.2024