function tjekGæt() {
  // Hent værdien fra inputfeltet
  var gættetTal = document.getElementById("gætTal").value;

  // Generer et tilfældigt tal mellem 1 og 11
  var rigtigtTal = Math.floor(Math.random() * 11) + 1;

  // Sammenlign brugerens gæt med det rigtige tal
  if (gættetTal == rigtigtTal) {
    console.log("Tillykke! Du har gættet rigtigt!");
  } else {
    console.log("Desværre, det rigtige tal var " + rigtigtTal + ". Prøv igen!");
  }
}
