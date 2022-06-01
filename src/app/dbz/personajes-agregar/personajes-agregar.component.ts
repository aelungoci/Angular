import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes-agregar',
  templateUrl: './personajes-agregar.component.html',
})

export class PersonajesAgregarComponent {

  @Input() nuevo: Personaje = { // Espera para recibir "nuevo: Personaje" del padre
    nombre: '',
    poder: 0
  }

  constructor (private dbzService: DbzService){}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {return;} // Decoraciones de vista => OPCIONAL
    console.log(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo); // Emite la propiedad (objeto) nuevo 
    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo = { // Luego lo deja vacío para poder agregar más
      nombre: '',
      poder :0
    };
  }
}
