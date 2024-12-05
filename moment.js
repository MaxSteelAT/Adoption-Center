const now = moment();

document.getElementById('formattedDate').innerHTML =
'Fecha actual: ' + now;

// Formatear la fecha en un formato más legible
const formattedDate = now.format('MMMM Do YYYY, h:mm:ss a'); // Ejemplo: Octubre 14º 2024, 3:45:10 pm
document.getElementById('formattedDate').innerHTML = 'Today is: ' + formattedDate;
 