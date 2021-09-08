import { Component } from '@angular/core';

interface Persona {
  nombre:    String;
  favoritos: Favorito[];
}

interface Favorito {
  id:     number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Leonardo',
    favoritos: [
      { id: 1, nombre: 'COD MW3' },
      { id: 2, nombre: 'Assassin\'s Creed Revelations' },
      { id: 3, nombre: 'Fallout' }
    ]
  };

  nuevoJuego: string = '';

  agregarJuego(): void {
    const nuevoFavorito: Favorito = {
      id: (this.persona.favoritos[this.persona.favoritos.length - 1].id + 1),
      nombre: this.nuevoJuego
    };

    this.nuevoJuego = '';
    this.persona.favoritos.push({...nuevoFavorito});
  }

  eliminar(indice: number): void {
    this.persona.favoritos.splice(indice, (indice + 1))
  }

  guardar(): void {
    console.log('Formulario posteado')
  }
}
