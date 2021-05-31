/*var emailUtente = prompt();

console.log(emailUtente);

var listaAdmin = ['marco@gmail.com', 'edoardo.ragazzi@gmail.com', 'elena@gmail.com'];



for (i = 0; i < listaAdmin.length; i++) {

    if (emailUtente == listaAdmin[i]) {
        console.log('Email corretta');
    }
    console.log('Email sbagliata');
}
*/
//------LISTA COGNOME--------
var cognomeUtente = prompt('Inserisci il tuo Cognome');

cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice();



var listaCognomi = ['Bianchi', 'Zeri', 'Rossi', 'Verdi', 'Gialli'];

console.log(listaCognomi);

listaCognomi.push(cognomeUtente);

listaCognomi.sort();
for (i = 0; i < listaCognomi.length; i++) {
    document.getElementById('lista').innerHTML += listaCognomi[i] + '</br>';
}

for (i = 0; i < listaCognomi.length; i++) {
    if (cognomeUtente == listaCognomi[i]) {
        document.getElementById('lista').innerHTML += ' ' + (i + 1);
    }
}






















