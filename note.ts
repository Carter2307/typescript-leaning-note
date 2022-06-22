//Les type de base
const a: string = "chaine de caractère"
const b: number = 10 //nombre entier/flottant 
const c: boolean = false //booléen 
const d: null = null // valeur nulle

const e: string[] = ["hello", "world"] // tableau de chaine de charactère uniquement 
const f: any[] = ["hello", "world", 10] // tableau qui prend prend n'importe quoi 

const obj: { a: string, b: number } = {
    a: "string valeur",
    b: 10
} // Object type notation

const obj2: { a: string, b?: number } = {
    a: "string valeur",
} // Objet avec clé optionel

const objs: { [key: string]: string } = { a: "hello", b: "world" } // object avec une infinité de clé de type string et de valeur de type string

const date: Date = new Date() // Primitive type assertion

//Typage des fonctions 
const callback: Function = (e: MouseEvent) => {
    return e
}

function getId(i: number): string {
    return i.toString()
}//fonction qui retourne une chaine de charactère

//Function typé avec une forme
const cb: (id: number) => string = (id: number) => {
    return id.toString()
}

//Les ASSERTIONS DE TYPE 
const compteur1 = document.querySelector('#compteur') as HTMLButtonElement // ** Permet de forcer un type sur un élément 
const compteur2 = <HTMLButtonElement>document.querySelector('#compteur') // Même chose que ** mais écris différement 


//Union type 
const ab: string | number =  10 // La variable peut être soit de type STRING soit de type NUMBER

//Type -> les typens sont des aliass qui permettent de réutiliser un type à plusieur endroid
type User = { firsname: string, lastname: string }

const user: User = { firsname: "carter", lastname: "roger" }

//Generic
function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const aa = identity("hello")
