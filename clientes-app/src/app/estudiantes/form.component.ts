import { Component, OnInit } from '@angular/core';
import {estudiantes} from './estudiantes'
import { EstudianteService } from './estudiante.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class EstudianteFormComponent implements OnInit {
  estudiantes: estudiantes = new estudiantes()
  titulo:string = "Crear Estudiante"

  constructor(private estudianteService: EstudianteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.estudianteService.getCliente(id).subscribe( (estudiante) => this.estudiantes= estudiante)
      }
    })
  }

  create(): void {
    this.estudianteService.create(this.estudiantes)
      .subscribe(estudiantes => {
        this.router.navigate(['/estudiantes'])
        swal.fire('Nuevo estudiante', `Cliente ${estudiantes.nombre} creado con éxito!`, 'success')
      });
  }

  update():void{
    this.estudianteService.update(this.estudiantes)
    .subscribe(estudiantes => {
      this.router.navigate(['/estudiantes'])
      swal.fire('estudiante Actualizado', `Cliente ${estudiantes.nombre} actualizado con éxito!`, 'success')
    })
  }
}
