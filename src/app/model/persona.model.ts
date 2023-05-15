export class Persona{
  id?: number;
  nombre: String;
  apellido: String;
  img: String;
  acercaDe:string;

  constructor(nombre: String, apellido: String, img: String, acercaDe: string){
      this.nombre = nombre;
      this.apellido = apellido;
      this.img = img;
      this.acercaDe = acercaDe;
  }
}
