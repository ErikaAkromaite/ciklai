window.onload = function() {
    const skaiciai = [7, 4, 9, 10, 20, 4, 1, 6, 13, 10,15];
  
    let suma = masyvoSuma(skaiciai);
    console.log(suma);

    let vidurkis = vidurkioSkaiciavimas(skaiciai)
    console.log(vidurkis);
}
function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) { 
        suma += masyvas[i];             
    }
    return suma;
}
function vidurkioSkaiciavimas (masyvas) {

    let vidurkis = masyvoSuma(masyvas)/masyvas.length;
    
    return vidurkis;
}