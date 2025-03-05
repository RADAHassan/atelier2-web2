class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    
    afficher() {
      console.log(`Vecteur(${this.x}, ${this.y})`);
    }
    
    additionner(autreVecteur) {
      return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
  }
  
  let v1 = new Vecteur2D();
  let v2 = new Vecteur2D(3, 4);
  let v3 = v1.additionner(v2);
  v1.afficher();
  v2.afficher();
  v3.afficher();
  
  class Rectangle {
    constructor(longueur = 1, largeur = 1) {
      this.nom = "rectangle";
      this.longueur = longueur;
      this.largeur = largeur;
    }
    
    afficher() {
      console.log(`${this.nom}: ${this.longueur} x ${this.largeur}`);
    }
    
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  class Carre extends Rectangle {
    constructor(cote) {
      super(cote, cote);
      this.nom = "carré";
    }
  }
  
  let rect = new Rectangle(4, 5);
  let carre = new Carre(3);
  rect.afficher();
  carre.afficher();
  console.log("Surface du rectangle :", rect.surface());
  console.log("Surface du carré :", carre.surface());
  
  class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Segment {
    constructor(x1, y1, x2, y2) {
      this.orig = new Point(x1, y1);
      this.extrem = new Point(x2, y2);
    }
  }
  
  let segment = new Segment(0, 0, 5, 5);
  console.log("Segment de :", segment.orig, "à", segment.extrem);