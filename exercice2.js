class Etudiant {
    constructor(nom, prenom, age, cne) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.cne = cne;
    }
    
    etudier() {
      console.log(`${this.prenom} ${this.nom} étudie.`);
    }
  }
  
  class Professeur {
    constructor(nom, age, cin) {
      this.nom = nom;
      this.age = age;
      this.cin = cin;
    }
    
    enseigner() {
      console.log(`${this.nom} enseigne.`);
    }
  }
  
  let etudiants = [
    new Etudiant("X", "Imad", 20, "CNE001"),
    new Etudiant("Y", "Hind", 22, "CNE002"),
    new Etudiant("Z", "Elon", 21, "CNE003"),
  ];
  
  etudiants.sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));
  console.log("Liste des étudiants triés :", etudiants);