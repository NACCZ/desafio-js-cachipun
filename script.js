var n = parseInt(prompt("introduzca el numero de rondas a jugar:"));
var sel;
function jugadaComp() {
  jugadaNum = Math.floor(Math.random() * 3);
  if (jugadaNum == 0) return "piedra";
  else if (jugadaNum == 1) return "papel";
  else return "tijera";
}
function compara(a, b) {
  if (a == "piedra" && b == "tijera") return 0; // 0 gana a -- 1 gana b
  if (a == "papel" && b == "piedra") return 0; // 0 gana a -- 1 gana b
  if (a == "tijera" && b == "papel") return 0; // 0 gana a -- 1 gana b
  return 1;
}
for (var i = 0; i < n; i++) {
  sel = prompt("introduce tu jugada (piedra, papel o tijera):");
  sel = sel.toLowerCase();
  comp = jugadaComp();
  console.log(comp);
  if (sel == comp) {
    alert("empate");
  } else {
    var respuesta = compara(sel, comp);
    if (respuesta == 0) {
      alert("felicitaciones");
    } else {
      alert("perdiste tonto");
    }
  }
}
