function berechneErgebnis() {
    // Hole die Werte aus den Eingabefeldern
    var funktion = document.getElementById('functionInput').value;
    var variable = document.getElementById('variableInput').value;

    // Überprüfe, ob die Funktion und die Variable gültig sind
    if (funktion && variable) {
      // Berechne das Ergebnis und zeige es an
      // Erstelle eine Funktion mit dem eingegebenen Code
      var benutzerFunktion = new Function('x', 'return ' + funktion);


      var ergebnis = benutzerFunktion(parseFloat(variable));
      
      // Zeige das Ergebnis im Ausgabefeld an
      document.getElementById('ergebnisOutput').value = ergebnis;
    } else {
      alert('Bitte gib eine Funktion und eine Variable ein.');
    }
  }