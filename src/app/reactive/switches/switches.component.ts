import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    // Suscribirse a un campo
    // this.miFormulario.get('genero')?.valueChanges.subscribe(
    //   genero => console.log(genero)
    // );

    this.miFormulario.valueChanges.subscribe(
      ({terminos, ...rest}) => {
        this.persona = rest;
      }
    );
  }

  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.terminos;

    this.persona = formValue;
  }
}
