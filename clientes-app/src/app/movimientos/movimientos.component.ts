import { Component, OnInit } from '@angular/core';
import { Movimiento } from './movimiento';
import { MovimientoService } from './movimientos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html'
})
export class MovimientosComponent implements OnInit {
  movimientos: Movimiento[] = [];

  constructor(private movimientoService: MovimientoService) { }

  ngOnInit() {
    this.movimientoService.getMovimientos().subscribe(
      movimientos => {
        console.log('Movimientos recibidos en el componente:', movimientos);
        this.movimientos = movimientos;
      }
    );
  }

  delete(movimiento: Movimiento): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al movimiento ${movimiento.id_movimiento} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.movimientoService.delete(movimiento.id_movimiento).subscribe(
          response => {
            console.log('Respuesta de eliminación en el componente:', response);
            this.movimientos = this.movimientos.filter(cli => cli !== movimiento);
            swal.fire(
              'Movimiento Eliminado!',
              `Movimiento ${movimiento.id_movimiento} eliminado con éxito`,
              'success'
            );
          }
        );
      }
    });
  }
}
