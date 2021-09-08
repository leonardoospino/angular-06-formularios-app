import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5)
  // });
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      // Validadores Síncronos
      [Validators.required, Validators.minLength(3)]
      // Validadores Asíncronos
    ],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Si falta un campo, entonces el programa explota
    this.miFormulario.setValue({
      nombre: 'RTX AFG',
      precio: 45,
      existencias: 21
    });

    this.miFormulario.reset({
      nombre: 'RTX AFG',
      existencias: 21
    });
  }

  campoInvalido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
