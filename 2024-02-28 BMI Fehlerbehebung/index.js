class Person {
  constructor(name, gender, groesseM, gewichtKG) {
    if (gender !== "m" && gender !== "f") {
      throw new Error("Falsches Geschlecht");
    }
    if (groesseM <= 0 || gewichtKG <= 0) {
      throw new Error("Größe und Gewicht müssen positive Zahlen sein");
    }
    this.name = name;
    this.gender = gender;
    this.groesseM = groesseM;
    this.gewichtKG = gewichtKG;
  }

  groesseCM() {
    return this.groesseM * 100;
  }

  vorName() {
    return this.name.split(" ")[0];
  }

  nachName() {
    return this.name.split(" ")[1];
  }

  toString() {
    return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
  }

  getBmi() {
    return this.gewichtKG / (this.groesseM * this.groesseM);
  }

  getGewichtType() {
    const bmi = this.getBmi();
    if (this.gender === "f" && bmi >= 19 && bmi <= 24) {
      return "Normalgewicht";
    } else if (this.gender === "m" && bmi >= 20 && bmi <= 25) {
      return "Normalgewicht";
    } else if (bmi < 19) {
      return "Untergewicht";
    } else {
      return "Übergewicht";
    }
  }
}

document
  .getElementById("personForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const groesse = parseFloat(document.getElementById("groesse").value);
    const gewicht = parseFloat(document.getElementById("gewicht").value);

    try {
      if (groesse <= 0 || gewicht <= 0) {
        throw new Error("Größe und Gewicht müssen positive Zahlen sein");
      }
      
      const person = new Person(name, gender, groesse, gewicht);

      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `${person.name} hat einen BMI von ${person
        .getBmi()
        .toFixed(2)}. Das bedeutet: ${person.getGewichtType()}`;

      document.getElementById("personForm").reset();
    } catch (error) {
      alert(error.message);
    }
  });