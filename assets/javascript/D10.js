/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("------------------ ESERCIZIO A ------------------");
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("------------------ ESERCIZIO B ------------------");
const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("------------------ ESERCIZIO C ------------------");
const me = {
  name: "A. Alberto",
  surname: "Coscia",
  age: 26,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("------------------ ESERCIZIO D ------------------");
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log("------------------ ESERCIZIO E ------------------");
me.skills = ["Javascript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("------------------ ESERCIZIO F ------------------");
me.skills.push("presto ne imparerò altri");
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("------------------ ESERCIZIO G ------------------");
me.skills.pop();
// oppure --> me.skills.splice(-1, 1);
console.log(me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("------------------ ESERCIZIO 1 ------------------");

const dice = () => {
  number = Math.floor(Math.random() * 6) + 1;
  console.log(number);
  return number;
};
dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("------------------ ESERCIZIO 2 ------------------");

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else if (num1 < num2) {
    console.log(num2);
    return num2;
  } else {
    console.log("i numeri sono uguali");
  }
};

whoIsBigger(5, 7);
whoIsBigger(26, 4);
whoIsBigger(1, 1);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("------------------ ESERCIZIO 3 ------------------");

const splitMe = (stringa) => {
  const strArray = stringa.split(" ");
  console.log(strArray);
  return strArray;
};

console.log("i love coding");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("------------------ ESERCIZIO 4 ------------------");

const deleteOne = (stringa, booleano) => {
  if (booleano) {
    const nuovaStringa = stringa.slice(1);
    console.log(nuovaStringa);
    return nuovaStringa;
  } else {
    const nuovaStringa = stringa.slice(0, -1);
    console.log(nuovaStringa);
    return nuovaStringa;
  }
};

deleteOne("prova", true);
deleteOne("prova", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("------------------ ESERCIZIO 5 ------------------");

const onlyLetters = (stringa) => {
  // creo un array il cui valore è il risultato dello split per parola della stringa passata come paramentro
  const strArray = stringa.split(" ");

  // creo un nuovo array il cui valore è strArray.filter(). il filtro itera ogni elemento dell'array strArray:
  // parseInt(currentElement) converte ogni elemento dell'array in un numero, se non è possibile ritorna NaN
  // isNaN() controlla che il risultato della conversione sia NaN: se true, ritorna l'elemento -> quindi ho un array di soli elementi NaN, in questo caso stringhe
  const arrayLettere = strArray.filter((currentElement) => isNaN(parseInt(currentElement)));

  // creo una variabile il cui valore è il join per parola degli elementi di arrayLetters -> quindi ho una stringa senza numeri
  const risultato = arrayLettere.join(" ");
  console.log(risultato);
  return risultato;
};

onlyLetters("i have 4 dogs");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("------------------ ESERCIZIO 6 ------------------");

const isThisAnEmail = (stringa) => {
  // controllo che la stringa contenga al suo interno il carattere @; se si ritorna true
  if (stringa.includes("@")) {
    console.log(stringa, "is an email");
    return true;
  } else {
    console.log(stringa, "is not an email");
    return false;
  }
};

isThisAnEmail("ciao@ciao.it");
isThisAnEmail("ciao");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("------------------ ESERCIZIO 7 ------------------");

const whatDayIsIt = () => {
  const now = new Date(); // ottengo le info del momento esatto in cui eseguo la funzione
  const currentDay = now.getDay(); // ottengo il numero del giorno attuale (il conto dei giorni parte da domenica: domenica = 0, sabato = 6)
  console.log(currentDay);
  return currentDay; // ritorno il numero del giorno

  /* SE VOLESSI RITORNARE IL NOME DEL GIORNO 
  // per avere i giorni in italiano, creo un array di stringhe con i giorni partendo da domenica (vedi commento riga currentDay)
  const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  // creo una variabile today il cui valore sarà l'elemento dell'array days all'indice currentDay
  const today = days[currentDay];
  console.log("oggi è", today);
  return today;
  */
};

whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("------------------ ESERCIZIO 8 ------------------");

const rollTheDices = (num) => {
  // creo una variabile sum ed un array values vuoto
  let sum = 0;
  const values = [];

  // creo un ciclo for che richiama la funzione dice() tante volte quanto indicato dal paramentro passato
  for (let i = 0; i < num; i++) {
    numeroEstratto = dice(); // salvo il numero generato dalla funzione dice() in una variabile numeroEstratto; lo sommo a sum e lo pusho dentro values
    sum += numeroEstratto;
    values.push(numeroEstratto);
  }

  // creo un oggetto risultato e come proprietà gli do i valori di sum e values
  const risultato = {
    sum: sum,
    values: values,
  };
  console.log(risultato);
  return risultato; // ritorno l'oggetto
};

rollTheDices(3);
rollTheDices(2);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("------------------ ESERCIZIO 9 ------------------");

const howManyDays = (data) => {
  const milSecInDay = 1000 * 60 * 60 * 24; // numero di milsec in un giorno
  const now = new Date().getTime(); // ora attuale in milsec
  const giornoPast = new Date(data).getTime();
  const differenza = Math.round((now - giornoPast) / milSecInDay); // calcola la diffirenza di milsec tra le due date e la arrotondo
  console.log(differenza);
  return differenza;
};

howManyDays("2024-05-16");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("------------------ ESERCIZIO 10 ------------------");

const isTodayMyBirthday = () => {
  const birthday = new Date("1998-04-15");
  // creo un array e ci metto dentro il mese ed il giorno del mio compleanno
  const birthdayArr = [];
  const birthdayMonth = birthday.getMonth();
  const birthdayDay = birthday.getDate();
  birthdayArr.push(birthdayMonth, birthdayDay);

  // creo un altro array e ci metto dentro il mese ed il giorno corrente
  const todayArr = [];
  const now = new Date();
  const actualMonth = now.getMonth();
  const actualDay = now.getDate();
  todayArr.push(actualMonth, actualDay);

  // creo un cilco for e controllo che mese e giorno dentro i due array siano gli stessi; se si ritorna true, altrimenti ritorna false
  for (let i = 0; i < todayArr.length; i++) {
    if (birthdayArr[i] === todayArr[i]) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
};

isTodayMyBirthday();

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("------------------ ESERCIZIO 11 ------------------");

const king = {
  name: "Theoden",
  age: 60,
  catchPhrase: "Forth Eorlingas!",
};

const deleteProp = (oggetto, stringa) => {
  delete oggetto[stringa];
  console.log(oggetto);
  return oggetto;
};

deleteProp(king, "age");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log("------------------ ESERCIZIO 12 ------------------");

const newestMovie = (array) => {
  let result = { Year: 1900 }; // setto un anno di partenza
  array.forEach((currentMovie) => {
    let currentYear = parseInt(currentMovie.Year); // converto la stringa year in numero
    if (currentYear > result.Year) {
      result = currentMovie; // se l'anno del current movie > anno di partenza, questo diventa il valore di result
    }
  });
  return result;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("------------------ ESERCIZIO 13 ------------------");

const countMovies = (array) => {
  console.log(array.length);
  return array.length;
};

countMovies(movies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("------------------ ESERCIZIO 14 ------------------");

const onlyTheYears = (array) => {
  const years = [];
  array.forEach((currentMovie) => {
    years.push(currentMovie.Year);
  });
  console.log(years);
};

onlyTheYears(movies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("------------------ ESERCIZIO 15 ------------------");

const onlyInLastMillennium = (array) => {
  // filtro l'array
  return array.filter((currentMovie) => {
    // ritorno solo gli elementi di movies il cui valore Year (convertito in numero) sia compreso tra 1900 e 1999
    return parseInt(currentMovie.Year) >= 1900 && parseInt(currentMovie.Year) < 2000;
  });
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log("------------------ ESERCIZIO 16 ------------------");

const sumAllTheYears = (array) => {
  // faccio un reduce sull'array movies
  const sum = array.reduce(function (acc, currentMovie) {
    return acc + parseInt(currentMovie.Year); // ritorno la somma tra acc (che parte da 0) ed il valore della stringa Year convertito in numero
  }, 0);
  console.log(sum);
};

sumAllTheYears(movies);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("------------------ ESERCIZIO 17 ------------------");

const searchByTitle = (stringa) => {
  const titolo = stringa;
  for (let i = 0; i < movies.length; i++) {
    if (titolo === movies[i].Title) {
      console.log(movies[i]);
      return movies[i];
    }
  }
};

searchByTitle("The Lord of the Rings: The Fellowship of the Ring");
searchByTitle("The Lord of the Rings: The Two Towers");
searchByTitle("The Lord of the Rings: The Return of the King");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("------------------ ESERCIZIO 18 ------------------");

const searchAndDivide = (stringa) => {
  const result = {
    match: [],
    unmatch: [],
  };

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(stringa)) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }

  console.log(result);
  return result;
};

searchAndDivide("Lord");
searchAndDivide("Tarzan");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("------------------ ESERCIZIO 19 ------------------");

const removeIndex = (num) => {
  movies.splice(num, 1);
  console.log(movies);
  return movies;
};

removeIndex(0);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const allTd = document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTextTd = () => {
  const tdAll = document.querySelectorAll("td");
  for (let i = 0; i < tdAll.length; i++) {
    console.log(tdAll[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addBackground = () => {
  const allAtags = document.querySelectorAll("a");
  for (let i = 0; i < allAtags.length; i++) {
    allAtags[i].style.backgroundColor = "red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
