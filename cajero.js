var imagenes = [];
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "moneda10.png";
class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagenen = new Image();
        this.imagenen.src = imagenes[this.valor];
    }

}

function entregarDinero() {
    /**Nota .value es caja de texto devuelve texto 
     * debemos parsear el numero 
     */

    dinero = parseInt(t.value);
    console.log(dinero);
    for (var bi of caja) { //toma todos los elementes de la caja y los itera y los coloca en bi
        // console.log(bi);
        if (dinero > 0) {
            toldinero.innerHTML = "";
            div = Math.floor(dinero / bi.valor); //funcion floor redondea haca abajo decimales
            //console.log(div);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0) {
        ///console.log("no hay dinero");
        resultado.innerHTML = "no puedo darte esa cantidad";
    } else {
        //console.log(entregado);
        for (var e of entregado) {
            if (e.cantidad > 0) {
                //console.log(e.cantidad);
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billetes de $ " + e.valor + "<br/>";

                for (var i = 0; i < e.cantidad; i++) {
                    ///resultadoIMG.appendChild(e.imagenen);
                    resultadoIMG.innerHTML = resultadoIMG.innerHTML + "<hr><br/> <strong> Billete de " + e.valor + "</strong><br/>";
                    resultadoIMG.appendChild(e.imagenen);
                    //  console.log(e.imagenen);
                }

            }
        }
    }
}

function muestraEC() {
    dinero = parseInt(t.value);
    var retiro = 0;
    for (var bi of caja) {
        var valor = bi.cantidad * bi.valor;
        tol += valor;

    }
    if (dinero > 0) {
        retiro = tol - dinero;
        tol = retiro;
    }
    console.log(tol);
    toldinero.innerHTML = "Dinero actual " + tol;

}


var caja = []; //caja de billetes del cajeroATM
var entregado = []; //coleccion de billetes que entrego al usuario, variable que se modifica

caja.push(new Billete(50, 2)); //agrega nuevos objetos al array
caja.push(new Billete(20, 3));
caja.push(new Billete(10, 3));


var dinero = 0;
var dif = 0; //variable iteradora
var papeles = 0;
var tol = 0; //variable para suumar y restar la cantidad del cajero

var b = document.getElementById("extraer"); //obtiene un elemento del html
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var toldinero = document.getElementById("dineroCajero");
var resultadoIMG = document.getElementById("addimg");
var dineroCajero = document.getElementById("muestraDinero");
dineroCajero.addEventListener("click", muestraEC);
var t = document.getElementById("dinero"); //recibe el valor de la caja de texto