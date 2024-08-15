import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from './productos/producto.service';

import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudianteService } from './estudiantes/estudiante.service';
import { EstudianteFormComponent } from './estudiantes/form.component';

import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { FormComponent } from './clientes/form.component';

import { FormsModule } from '@angular/forms';
import { MovimientoFormComponent } from './movimientos/form.component';
import { MovimientoService } from './movimientos/movimientos.service';
import { MovimientosComponent } from './movimientos/movimientos.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'productos', component: ProductosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'estudiantes/form', component: EstudianteFormComponent},
  {path: 'estudiantes/form/:id', component: EstudianteFormComponent},
  {path: 'tb_movimiento', component: MovimientosComponent},
  {path: 'tb_movimiento/form', component: MovimientoFormComponent},
  {path: 'tb_movimiento/form/:id', component: MovimientoFormComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    ClientesComponent,
    FormComponent,
    EstudiantesComponent,
    EstudianteFormComponent,
    MovimientoFormComponent,
    MovimientosComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ProductoService, ClienteService, EstudianteService, MovimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
