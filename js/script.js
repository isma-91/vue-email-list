/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
new Vue({
  el: "#root",
  data: {
    arrMails: [],
    randomColors: [],
    bkgColor: "",
  },
  methods: {
    // funzione per generare colori random esadecimali
    getRandomColor() {
      const acceptableChars = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += acceptableChars[this.getRandomInteger(0, 15)];
      }
      return color; // #xxxxxx
    },

    //Funzione per prendere numeri random
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  created() {
    // Ciclo per creare le 10 mail e pusharle nell'array delle mails
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
          // console.log(result.data.response);
          this.arrMails.push(result.data.response);
          // console.log(this.arrMails);
        });

      // pushare nell'array i colori random generati grazie allo stesso ciclo usato per creare le mails
      this.randomColors.push(this.getRandomColor());
      // console.log(this.randomColors);
    }
    // Applicare il colore random al background
    this.bkgColor = this.getRandomColor();
  },
});
