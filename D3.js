/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log( "\n ----------------------------- Eserzio 1-----------------------------\n");
let num1 = 10;
let num2 = 20;
console.log( "ho due numeri " + num1+ " e "+num2);
if (num1 > num2) {
  console.log("num1 è maggiore di num2");
} else if (num1<num2) {
  console.log("num1 è minore si num2");
} else {
  console.log("i numeri sono ugulali");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log( "\n ----------------------------- Eserzio 2-----------------------------\n");
let num3 = 6;
if (num3!== 5) {console.log("not equal");} else {console.log("il numero è 5");}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log( "\n ----------------------------- Eserzio 3-----------------------------\n");
let num4  =-35;
if ((num4 % 5) !== 0 || -0) {console.log("il numero fornito NON è divisibile per 5");
} else {console.log("è divisibile per 5");}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log( "\n ----------------------------- Eserzio 4-----------------------------\n");
let num5= 3;
let num6= 5;
if(num5=== 8 || num6===8) {
  console.log("uno dei due numeri forniti è uguale ad 8");
} else if (num5+num6===8 || num5-num6===8 || num6-num5===8) {
  console.log("L'addizione/sottrazioe dei due numeri è uguale ad 8");
} else{ console.log("nessuno dei numeri forniti è uguale ad 8, ne la loro somma/differenza è uguale ad 8");}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. 
  Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log( "\n ----------------------------- Eserzio 5-----------------------------\n");
let totalShoppingCart = 50;
let newTotalShoppingCart;
if (totalShoppingCart>50) {
  console.log("Hai diritto alla spedizione gratuita e quindi devi pagare un totale di: "+totalShoppingCart);}
  else{ newTotalShoppingCart = totalShoppingCart+10
    console.log("la vostra spedizione costa 10$, quindi il totale da pagare è: "+ newTotalShoppingCart);}
    

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log( "\n ----------------------------- Eserzio 6-----------------------------\n");
let totalShoppingCart2 = 100;
let newTotalShoppingCart2;
if (totalShoppingCart2>50) {
  newTotalShoppingCart2 = totalShoppingCart2 *0.8
  console.log("Hai diritto alla spedizione gratuita e hai uno sconto del 20% quindi il totaleè: "+newTotalShoppingCart2);}
  else{ 
    newTotalShoppingCart2 = (totalShoppingCart2*0.8) + 10;
    console.log("la vostra spedizione costa 10$, ma hai comunque il 20% du sconto e quindi il totale da pagare è: "+ newTotalShoppingCart2);}
    

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log( "\n ----------------------------- Eserzio 7-----------------------------\n");
let numero = 24;
let numero1 = 76;
let numero2 = 5;
if (numero>numero1&&numero>numero2){
  if(numero1>numero2){console.log(numero,numero1,numero2);}
  else {console.log(numero,numero2,numero1);}
  
}else if (numero1>numero&&numero1>numero2) {
  if(numero>numero2){console.log(numero1,numero,numero2);}
  else {console.log(numero1,numero2,numero);}
} else {
  if(numero>numero1) {console.log(numero2,numero,numero1);}
  else{console.log(numero2,numero1,numero);}
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log( "\n ----------------------------- Eserzio 8-----------------------------\n");

let variavilefornita = 10;
if (typeof variavilefornita === "number"
  ){console.log("il valore inserito è un numero, in particolare:",variavilefornita);}
  else{console.log("il valore inserito NON è un numero ma è: "+ variavilefornita);}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log( "\n ----------------------------- Eserzio 9-----------------------------\n");
let num9  =2221;
if ((num9 % 2) !== 0 || -0) {console.log("il numero fornito dispari");
} else {console.log("IL numero è pari");}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log( "\n ----------------------------- Eserzio 10-----------------------------\n");

let val = 5
  if (val < 10 && val>5) {
      console.log("Meno di 10");
    } else if (val <= 5) {
      console.log("Meno o uguale a 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log( "\n ----------------------------- Eserzio 11-----------------------------\n");
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "toronto";
console.log("aggiunto la key 'city'",me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log( "\n ----------------------------- Eserzio 12-----------------------------\n");
delete me.lastName;
console.log("rimozione della key 'lastname'",me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log( "\n ----------------------------- Eserzio 13-----------------------------\n");
me.skills.pop();
console.log("tolto l'ultimo elemento di skils", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log( "\n ----------------------------- Eserzio 14-----------------------------\n");
const arraydinumeri =[];
console.log(arraydinumeri);
arraydinumeri.push(1);
arraydinumeri.push(2);
arraydinumeri.push(3);
arraydinumeri.push(4);
arraydinumeri.push(5);
arraydinumeri.push(6);
arraydinumeri.push(7);
arraydinumeri.push(8);
arraydinumeri.push(9);
arraydinumeri.push(10);
console.log(arraydinumeri);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log( "\n ----------------------------- Eserzio 15-----------------------------\n");
arraydinumeri[arraydinumeri.length-1] = 100;
console.log(arraydinumeri);
