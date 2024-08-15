

import { Injectable } from '@angular/core';
import { estudiantes } from './estudiantes';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EstudianteService {

  private urlEndPoint: string = 'http://localhost:8080/api/estudiantes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<estudiantes[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map (response => response as estudiantes [])
    );
  }
  create(estudiantes: estudiantes): Observable<estudiantes> {
    return this.http.post<estudiantes>(this.urlEndPoint, estudiantes, { headers: this.httpHeaders });
  }
  
  getCliente(id: number): Observable<estudiantes> {
    return this.http.get<estudiantes>(`${this.urlEndPoint}/${id}`);
  }
  
  update(estudiantes: estudiantes): Observable<estudiantes> {
    return this.http.put<estudiantes>(`${this.urlEndPoint}/${estudiantes.id}`, estudiantes, { headers: this.httpHeaders });
  }
  
  delete(id: number): Observable<estudiantes> {
    return this.http.delete<estudiantes>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}