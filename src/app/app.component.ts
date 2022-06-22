import { Component, ViewChild } from '@angular/core';
import { ConsultaService } from './services/consulta.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('myForm') myForm!: NgForm;
  public form: any = { type: '', number: '' };
  public user: any = {};
  public data: any = {};

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {}

  get_users() {
    if (this.myForm.valid) {
      this.consultaService
        .list_users(this.form.type, this.form.number)
        .subscribe({
          next: (res) => {
            this.data = res;
            this.form.nombres = res.nombres;
            this.form.apellidoPaterno = res.apellidoPaterno;
            this.form.apellidoMaterno = res.apellidoMaterno;
          },
        });
    } else {
      Swal.fire('Error!', 'Seleccione un tipo e ingrese su numero', 'error');
    }
  }

  clearAPI() {
    this.data = {};
  }

  clearFORM() {
    this.form = { type: '', number: '' };
  }

  register() {
    console.log(this.form);
    const name = `${this.form.nombres} ${this.form.apellidoPaterno} ${this.form.apellidoMaterno}`;
    Swal.fire('HOLA', name, 'success');
  }
}
