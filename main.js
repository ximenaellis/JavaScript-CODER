

class Remedio {
    constructor (nombre, dosis, stock, consumido) {
        this.nombre = nombre.toLowerCase();
        this.dosis = parseInt(dosis);
        this.stock = parseInt(stock);
        this.consumido = parseInt(consumido);
        }
        
        actualizarStock () {
            const resta = (a, b) => a - b;
                this.stock = (resta (this.stock, this.consumido))
        }
}


const remedio1 = new Remedio ("paracetamol", 1, 30, 0);
const remedio2 = new Remedio ("Vitamina D", 1, 20, 0);

const misRemedios = [remedio1, remedio2];



const remedio3 = new Remedio ("cortisol", 1, 20, 0);

misRemedios.push (remedio3);

const nombresRemedios = misRemedios.map ((remedio) => remedio.nombre);


console.log (`Mis remedios recetados son ${(misRemedios.length)}, y se llaman: ${nombresRemedios.join(", ")}`);


console.log (`Debo tomar ${remedio1.dosis} pastilla de ${remedio1.nombre} cada 6 horas`);

console.log (`Mi stock inicial era de ${[remedio1.stock]} pastillas`);

remedio1.consumido = 3;
remedio1.actualizarStock ()

console.log (`Hoy consumí ${remedio1.consumido} pastillas de ${remedio1.nombre}`);


console.log (`Me quedan ${remedio1.stock} pastillas de ${remedio1.nombre}`);

