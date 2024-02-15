class Person {
  constructor(name, gender, groesseM, gewichtKG) {
    if (gender !== "m" && gender !== "f") {
      throw new Error("Wrong gender");
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
export { Person };
