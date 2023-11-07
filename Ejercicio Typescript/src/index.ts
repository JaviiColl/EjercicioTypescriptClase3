let mensaje: string="Hola Mundo"

mensaje ="chanchito feliz"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

/** 
 * tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any  (NO USAR)
 * unknow
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos Inferidos
*/

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos: boolean = true


/*                    Ejemplo de ANY
let mivariable
mivariable = "chanchito feliz"
mivariable = 42
*/ 


function chanchitoFeliz(config: any) {
    return config
}

let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number []= [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = []

// nums.map(x => x.) //  el autocompletado sugiere metodos del tipo de datos

let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]


const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState{ Idle, Loading, Success, Error }

const estado = LoadingState.Success

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}
const objeto: Persona = { 
    id: 1,
    nombre: 'Hola Mundo', 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'siempre viva',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = []           //arreglo "pirata" jajaja
 



    

