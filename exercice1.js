class Voiture {
    constructor(model, marque, annee, type, carburant) {
      this.model = model;
      this.marque = marque;
      this.annee = annee;
      this.type = type;
      this.carburant = carburant;
    }
  }
  
  class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
      super(model, marque, annee, type, carburant);
      this.serie = serie;
      this.hybride = hybride;
    }
  
    alarmer() {
      console.log("Alarme activée pour la Hyundai");
    }
  }
  
  class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
      super(model, marque, annee, type, carburant);
      this.options = options;
    }
  }
  
  let voitures = [
    new Hyundai("i10", "Hyundai", 2020, "Rline", "Essence","toit ouvrant" ),
    new Ford("kuga", "Ford", 2020, "Sport", "Essence", "Siege sport"),
    new Voiture("Clio", "Renault", 2020, "Sport", "Diesel", "4*4")
  ];
  
  voitures.sort((a, b) => a.annee - b.annee);
  console.log("Liste des voitures triées par année :", voitures);