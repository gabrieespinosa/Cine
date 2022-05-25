let cine: boolean[] = [true, false, false, true];
let sillasDesocupadas: number = 0;
for (let indice: number = 0; indice < cine.length; indice++) {
  if (cine[indice] === false) {
    sillasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas es " + sillasDesocupadas);
