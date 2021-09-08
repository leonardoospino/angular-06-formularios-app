import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 3090',
    precio: 12,
    existencias: 34
  };

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.touched &&
      this.miFormulario?.controls.precio?.value < 0
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls.precio?.invalid &&
      this.miFormulario?.controls.precio?.touched
    );
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario.value);

    this.miFormulario.reset({
      precio: 0,
      existencias: 0
    });
    // console.log(this.miFormulario?.controls.precio.value);
  }
}
