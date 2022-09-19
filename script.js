// affiche dans la console le texte entre guillemets 
/* Là je peux écrire sur plusieurs lignes, 
On va apparendre les variables (nombres, chaînes de caractères, les booléens, les tableaux), les conditions, les boucles et les fonctions */
console.log("Je teste le JS !")

// Les variables 
prenom="Caroline" // chaîne de caractères ou string 
age = 29; // Numérique : pas de guillemets 

console.log("Je m'appelle " + prenom + ". J'ai " + age + " ans");

// EXO 
SEL=100;
SUCRE=120;

console.log("J'ai du sel : " + SEL)
console.log("J'ai du sucre : " + SUCRE)

// VOUS ECRIVEZ DU CODE : INVERSER LES VARIABLES

SEL_TMP = SEL;
SEL = SUCRE;
SUCRE = SEL_TMP;

console.log("J'ai du sel : " + SEL)
console.log("J'ai du sucre : " + SUCRE)


// Concaténations 

A=100;
B=200;
C=A+B // C va contenir 300, car c'est une variable numérique

nom="Bonnet"
pm=prenom+nom; // ça concatène CarolineBonnet

console.log(pm)

// EXO : déclarer une variable prix HT = 100, on va stocker dans une autre variable le PRIX TTC 
// afficher dans la log 

prixHT=100;
prixTTC=prixHT*1.2 //attention il faut mettre un . et pas une virgule

console.log(prixTTC)

// fonction indexof qui recherche une chaine de caractère et ça nous donne sa position : variable.indexOf("ch caracteres, où on commence( par défaut c'est 0))

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");

console.log(result)

// Les conditions 

age=29;
if (age>17){
console.log("Vous êtes majeurs ! ")
}
if (age<18){

    console.log("Vous êtes mineur !")
}

// créer une valeir numérique et indiquez si cette variable est positive ou pas 

chiffre=100
if (chiffre<0){
console.log("La valeur est négative")
}
if (chiffre>0){
    console.log ("La valeur est positive")
}
if (chiffre=0){
console.log("La valeur est nulle")

}

// créer une valeur numérique et indiquez si cette variable est paire ou impaire 

chiffre2=4
if (chiffre2 % 2 == 0) {
console.log("Le chiffre est pair")
}
else {
console.log("Le chiffre est impair")
}

// Affichez dans la console la variable qui contient le plus de lettre soit le prénom VALEUR a plus de lettre et en comporte NB
// Mettre la dernière lettre de la variable en majuscule 

NOM="bonnet"
PRENOM="caroline"
if (NOM.length >= PRENOM.length){
    console.log("Le nom " + NOM + "est plus long et comporte " + NOM.length + " caractères")
}
else {
    console.log("Le prénom " + PRENOM + " est plus long et comporte " + PRENOM.length + " caractères")
}

// Mettre la dernière lettre de la variable en majuscule 

NOM2= NOM.substr(0,NOM.length - 1) + NOM.substr(NOM.length - 1).toUpperCase() 
PRENOM2= PRENOM.substr(0,PRENOM.length - 1) + PRENOM.substr(PRENOM.length - 1).toUpperCase() 

console.log(NOM2 + " " + PRENOM2)

// Inverser la première lettre du prénom et du nom 

new_nom = PRENOM.substr(0,1) + NOM.slice(1);
new_prenom = NOM.substr(0,1) + PRENOM.slice(1)
console.log(new_nom + " " + new_prenom);

// Les boucles 

// Je veux afficher dans la oage les nombres de 1 à 1000
// for et while 

// Je veux démarrer à 0
// Je veux m'arrêter à 1000, tant que i est inféreiru à 1000 on continue 
// Je veux qu'à chaque tour tu incrémentes de 1
// 

//for (i=0 ; i<=1000 ; i=i+1){
//console.log(i)

//}

// afficher la table de multiplication de 2

//for (i=0 ; i<=10 ; i++){
   // console.log(i*2)
  // }

// Afficher 10 fois le caractère *

//for(let i=0; i<9; i++){
   // console.log("*")
//}

// afficher un carré de 10 étoiles de côté

//for(i=0; i<10; i++){
  //  document.write("<br>*")
  //  for (j=0; j<10; j++){
   //     document.write("*")
  //  }
//}


// afficher la table de 8

//for (i=0 ; i<=10 ; i++){
    //console.log(i*8)
  // }


// afficher toutes les tables de multiplication 

//for (i=0 ; i<=10 ; i++){
    //for (j=0 ; j<=10 ; j++){
        //console.log(i*j)
   // }
  // }

// afficher la factorielle d'un nombre 

// pour la factorielle de 4
//result=1
//for (i=1 ; i<4 ; i++){
//result=result*(i+1)
   //}
  // console.log(result)

  // afficher un triangle  

for(i=0; i<10; i++){
    document.write("<br>*")
    for (j=0; j<10; j++){
        document.write("*")
    }
}