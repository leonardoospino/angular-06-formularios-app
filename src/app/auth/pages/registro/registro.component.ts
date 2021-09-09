import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
import {
  nombreApellidoPattern,
  noPuedeSerStrider
} from 'src/app/shared/validators/validaciones';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

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
      ],
      [ this.emailValidator ]
    ],
    username: ['', [Validators.required, noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required]
  },
  // Opciones para el formulario (async & sync validator)
  {
    validators: [
      this.validatorService.camposIguales('password', 'password2')
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Adriana Contreras',
      email: 'adrianaccfontalvo@gmail.com',
      username: 'adri77',
      password: '123456',
      password2: '123456'
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
