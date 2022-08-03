let nombre = prompt("Hola!! ¿Cual es tu nombre?");

function horario() {
  let turno = prompt("¿Vendrías a almorzar o cenar");
  if ((turno == "almorzar", "Almorzar")) {
    alert(
      "Bien " +
        nombre +
        " si vas a venir a almorzar tu plato incluye bebida gratis"
    );
  } else {
    alert(
      "Bien " +
        nombre +
        " si vas a venir a cenar tu plato incluye postre gratis"
    );
  }
}

alert("Bienvenido/a " + nombre + " a Restaurant Uno!");
alert("Veamos el plato sugerido del día para cuando nos visites");
let dia = prompt("Que dia venis a comer?");

switch (dia) {
  case ("lunes", "Lunes"):
    alert("El plato de lunes es sandwuich vegetariano con papas fritas");
    horario();
    break;
  case ("martes", "Martes"):
    alert("El plato de martes es empanadas criollas");
    horario();
    break;
  case ("miercoles", "Miercoles", "miércoles", "Miércoles"):
    alert("El plato de miercoles es ensalada cesar especial");
    horario();
    break;
  case ("jueves", "Jueves"):
    alert("El plato de jueves es sorrentinos de jamón y queso");
    horario();
    break;
  case ("viernes", "Viernes"):
    alert("El plato de viernes es pizza napolitana");
    horario();
    break;
  default:
    alert("Fin de semana no tenemos plato del día");
    break;
}

let cantidad = prompt("¿Cuantas personas vendrían");
let reserva = prompt("Querés confirmar la reserva?");
if (reserva == "si") {
  alert("Tu reserva ha sido confirmada para " + cantidad + " comensales");
} else {
  alert("Gracias por tu consulta, te esperamos en otra oportunidad!");
}
