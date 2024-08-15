import { Component, OnInit } from '@angular/core';
import { Movimiento } from './movimiento';
import { MovimientoService } from './movimientos.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-movimiento-form',
  templateUrl: './form.component.html'
})
export class MovimientoFormComponent implements OnInit {
  movimientos: Movimiento = new Movimiento();
  titulo: string = "Crear Movimiento";

  constructor(private movimientoService: MovimientoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarMovimiento();
  }

  cargarMovimiento(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.movimientoService.getMovimiento(id).subscribe((movimiento) => this.movimientos = movimiento);
      }
    });
  }

  create(): void {
    this.movimientoService.create(this.movimientos)
      .subscribe(movimientos => {
        this.router.navigate(['/tb_movimiento']);
        swal.fire('Nuevo movimiento', `Movimiento ${movimientos.id_movimiento} creado con éxito!`, 'success');
      });
  }

  update(): void {
    this.movimientoService.update(this.movimientos)
      .subscribe(movimientos => {
        this.router.navigate(['/tb_movimiento']);
        swal.fire('movimiento Actualizado', `Movimiento ${movimientos.id_movimiento} actualizado con éxito!`, 'success');
      });
  }
}
