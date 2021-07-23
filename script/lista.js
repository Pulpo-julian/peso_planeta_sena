var usuario = parseInt(prompt("¿cual es tu peso?"));
var planeta = parseInt(prompt("elige tu planeta. \n 1 es Mercurio \n 2 es Venus \n 3 es Tierra \n 4 es Marte \n 5 es Jupiter \n 6 es Saturno \n 7 es Urano \n 8 es Neptuno"));

// declaro variables

var g_mercurio = 3.7;
var g_venus = 8.9;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.9;
var g_neptuno = 11.15;
var nombre = "";

// condicionales de planetas
// no hago calculo en tierra por que es el mismo peso del usuario

if (planeta == 1) {
    usuario = (usuario * g_mercurio)/g_tierra;
    nombre = "mercurio";
} else if (planeta == 2) {
    usuario = (usuario * g_venus)/g_tierra;
    nombre = "venus";
} else if (planeta == 3) {
    nombre = "tierra";
} else if (planeta == 4) {
    usuario = (usuario * g_marte)/g_tierra;
    nombre = "marte";
} else if (planeta == 5) {
    usuario = (usuario * g_jupiter)/g_tierra;
    nombre = "jupiter";
} else if (planeta == 6) {
    usuario = (usuario * g_saturno)/g_tierra;
    nombre = "saturno";
} else if (planeta == 7) {
    usuario = (usuario * g_urano)/g_tierra;
    nombre = "urano";
} else if (planeta == 8) {
    usuario = (usuario * g_neptuno)/g_tierra;
    nombre = "neptuno";
} else {
    usuario = "10.000'000.000";
    nombre = "kripton";
}

document.getElementById("parrafo").innerHTML = "tu peso en " + nombre + " es de <strong>" + usuario + " kilogramos </strong>";

