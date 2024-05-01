class Kasse {
    #geldlade;
    #gescannteArtikel;
    #geldGegeben; // Geld, das bezahlt wurde

    constructor(geldlade) {
        this.#geldlade = geldlade;
        this.#gescannteArtikel = [];
        this.#geldGegeben = 0; // Initialisierung des bezahlten Geldbetrags
    }
     
    scannen(artikel) {
        this.#gescannteArtikel.push(artikel);
    }

    offenerBetrag() {
        return this.zubezahlenderBetrag() - this.#geldGegeben;
    }

    bezahlen() {
        const preis = this.zubezahlenderBetrag();
        const betrag = this.#geldGegeben;
        if (betrag < preis)
            throw new Error('Nicht genug Geld bezahlt!');
        return betrag; // Rückgabe des bezahlten Betrags
    }

    rueckgeld() {
        if (this.#geldGegeben < this.zubezahlenderBetrag()) {
            throw new Error('Nicht genug Geld bezahlt!');
        }
        return this.#geldGegeben - this.zubezahlenderBetrag();
    }

    Kassenstand() {
        return this.#geldlade + this.zubezahlenderBetrag();
    }

    returngescannteArtikel() {
        const artikelNamen = [];
        for (let i = 0; i < this.#gescannteArtikel.length; i++) {
            artikelNamen.push(this.#gescannteArtikel[i].name);
        }
        return artikelNamen;
    }

    zubezahlenderBetrag() {
        let total = 0;
        for (let artikel of this.#gescannteArtikel) {
            total += artikel.preis;
        }
        return total;
    }

    get geldGegeben() {
        return this.#geldGegeben;
    }

    set geldGegeben(value) {
        this.#geldGegeben = value;
    }
}

class Artikel {
    constructor(name, preis) {
        this.name = name;
        this.preis = preis;
    }
}

const apfel = new Artikel("Apfel", 1.0);
const kaese = new Artikel("Käse", 4.3);
const cola = new Artikel("Cola", 1.9);

const kasse = new Kasse(100);
kasse.geldGegeben = 50;

kasse.scannen(apfel);
kasse.scannen(kaese);
kasse.scannen(cola);

const bezahlterBetrag = kasse.bezahlen(); // Bezahlen und den bezahlten Betrag erhalten

console.log("Gesamtpreis:", kasse.zubezahlenderBetrag());
console.log("Bezahlter Betrag:", bezahlterBetrag);
console.log("Rückgeld:", kasse.rueckgeld());
console.log("Kassenstand:", kasse.Kassenstand());
console.log("Gescannte Artikel:", kasse.returngescannteArtikel());
