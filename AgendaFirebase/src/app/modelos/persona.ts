export class Persona {
    public $key:string;
    constructor(
        public nombre:string,
        public apellidos:string,
        public telefono:number,
        public sexo:string,
        public aficiones
    ) {

    }

    limpiar() {
        this.nombre = "";
        this.apellidos = "";
        this.telefono = 0;
        this.sexo = "";
        this.aficiones = [{value:'informatica', selected:false}, {value:'viajes', selected:false},{value:'cine', selected:false}];
    }
    
}