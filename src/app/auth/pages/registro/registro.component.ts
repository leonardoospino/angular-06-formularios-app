import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
import {
  nombreApellidoPattern,
  noPuedeSerStrider
} from 'src/app/shared/validators/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        // Utilizando archivo compartido
        Validators.pattern(nombreApellidoPattern)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        // Utilizando servicio de validaciones
        Validators.pattern(this.validatorService.emailPattern)
      ]
    ],
    username: ['', [Validators.required, noPuedeSerStrider]]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Adriana Contreras',
      email: 'adrianaccfontalvo@gmail.com',
      username: 'adri77'
    });
  }

  campoInvalido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
