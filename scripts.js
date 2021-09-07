class Paquetes {

    constructor(producName, noches, jornadas, comidas, capacidad, precio){

            this.productName = producName;
            this.noches =noches;
            this.jornadas =jornadas;
            this.comidas =comidas;
            this.capacidad = capacidad;
            this.precio = precio;



    }

    getsaleinfo (){

        return (this.productName + " - " + this.noches + " Noches - " + this.jornadas + " Jornadas - " + this.comidas + " Incluye COmida - " + this.capacidad + " Personas Capacidad - " + this.precio + "$" ).toUpperCase ();
    }

}

let paquete1 = new Paquetes ("Cayasta" , "3" , "2" , "si" , 6, 20000);
let paquete2 = new Paquetes ("Esquina" , "4" , "3" , "no" , 4, 35000);
let paquete3 = new Paquetes ("Amazonas" , "10" , "5" , "si" , 12, 250000);
let cayasta = 20000
let esquina = 35000
let amazonas = 250000



const salidas =[];

salidas.push(paquete1);
salidas.push(paquete2);
salidas.push(paquete3);
let paquete0 = new Paquetes ("Santa Elena", "3", "2", "si", 4, 15000 );
salidas.unshift(paquete0);

console.log(paquete0);

console.log(salidas);

console.log(paquete1)

let ciudades_pesca = ["Cayasta", "Helvecia", "Santa Elena", "La Paz", "San Javier", "Esquina", "Alejandra"];
console.log ("ciudades para pesca" + ciudades_pesca);
console.log ("ciudades ordenadas alfabeticamente" + ciudades_pesca.sort());



alert (paquete1.getsaleinfo());
alert (paquete2.getsaleinfo());
alert (paquete3.getsaleinfo());


  let service = prompt ("que paquete deseas regalarte? cayasta, esquina o amazonas").toLowerCase();
    switch (service){
        case "cayasta":
            alert ("Adquiriste Cayasta")
            var operation = prompt ("Esta Seguro que va a realizar la transaccion? si o no ");
            let result;
                    switch (operation) {

                    case "si" :
                        var cuotas = parseInt (prompt("ingrese cantidad de cuotas"));
                     result = cayasta / cuotas ;
                        alert ("el valor de las cuotas abonar son: $ " + result + " durante " + cuotas + " meses")
                        break;

                    case "no" :
                    alert  ("lo esperamos en otro momento") ;
                        break;

                    


        
        case "esquina":
            alert ("compraste esquina")
            
            break;
        case "amazonas":
            alert ("compraste amazonas")
            break;   
        case "":
            alert ("no elegiste nada")
            break;
        
        default:
            alert ("debe elegir un paquete");
    }
}
