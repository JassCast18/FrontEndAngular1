

import { Component, OnInit } from '@angular/core';
import { estudiantes } from './estudiantes';
import { EstudianteService } from './estudiante.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './estudiantes.component.html'
  
})
export class EstudiantesComponent implements OnInit {
  estudiantes: estudiantes[] = [];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.estudianteService.getClientes().subscribe(
      estudiantes  => this.estudiantes = estudiantes 
    );
  }

  delete(estudiantes: estudiantes): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminal al estudiante ${estudiantes.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      buttonsStyling: true,
      reverseButtons: true

    }).then((result)=>{
      if(result.value){
        this.estudianteService.delete(estudiantes.id).subscribe(
          response=>{
            this.estudiantes = this.estudiantes.filter(cli =>cli !== estudiantes)
            swal.fire(
              'estudiante Eliminado!',
              `estudiante ${estudiantes.nombre} eliminado con éxito`,
              'success'
            )
          }
        )
      }
    })
  }
}