// TS apporte une synthaxe qui permet d'ajouter des informations sur le type des variables 
// sur le type des variables 

//voici la syntaxe de declaration d'une variable en trypescript 
// let maVariable: type;

const monEntier: number = 0;
const maChaine: string = 'Une chaine de caracrères';

//on peut creer ses propres types
// const unEtudiant: Etudiant = new Etudiant();

//typescript supporte aussi ce qu'on appelle la genericite
const pleinDetudiants: Array<string> = [maChaine];


//ceci 
let iCanChangeType : any = 4;

iCanChangeType = false;


// Typescript propose le type enum

/*enum StudentStatus {
    Asleep,
    Focused,
    Missing
}

// Les interfaces
/*On peut comparer une interface a un contrat, 
implementer une interface c'est s'engager a posseder toutes les proprietes presentees dans l'interfaces*/

/*interface Student {
    firstname: string,
    lastname: string,
    age: number,
    status: StudentStatus
    followInClass(cours: string): void // on peut aussi passer des fonctions en propriétés 
}

const Angelo: Student = {
    firstname: 'Angelo',
    lastname: 'MACAIRE',
    age: 22,
    status: StudentStatus.Focused,
    followInClass: function(cours: string) {console.log('je suis en' + cours )}
}


// Les fonctions en typescrpit 

function createStudent(firstname: string, lastname:string, age:number, status: StudentStatus): Student {
    const newStudent : Student = {
        age: age,
        firstname: firstname,
        lastname: lastname,
        status:status
    }

    return newStudent
}*/

class Vehicule {
    brand: string;
    color: string;
    speed: number;

    deplacer(): void {
        console.log('je me deplace');
    }

    constructor(){
        console.log('un nouveau vehicule cree')
    }


}