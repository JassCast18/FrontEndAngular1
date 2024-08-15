

import { Injectable } from '@angular/core';
import { Movimiento } from './movimiento';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MovimientoService {

  private urlEndPoint: string = 'http://localhost:8080/api/tb_movimiento';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMovimientos(): Observable<Movimiento[]> {
    return this.http.get(this.urlEndPoint).pipe(
      
      map (response => response as Movimiento [])
    );
  }
  create(movimientos: Movimiento): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.urlEndPoint, movimientos, { headers: this.httpHeaders });
  }
  
  getMovimiento(id: number): Observable<Movimiento> {
    return this.http.get<Movimiento>(`${this.urlEndPoint}/${id}`);
  }
  
  update(movimientos: Movimiento): Observable<Movimiento> {
    return this.http.put<Movimiento>(`${this.urlEndPoint}/${movimientos.id_movimiento}`, movimientos, { headers: this.httpHeaders });
  }
  
  delete(id: number): Observable<Movimiento> {
    return this.http.delete<Movimiento>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}