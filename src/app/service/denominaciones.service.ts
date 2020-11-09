import { Injectable } from '@angular/core';
import { Observable, Subscription, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Denominaciones } from '../models/denominaciones';

@Injectable({
  providedIn: 'root'
})
export class DenominacionesService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private denominacionesUrl:string = 'http://localhost:1414/tipodenominacion';
  constructor(private http: HttpClient) { }

  getDenominaciones():Observable<Denominaciones[]>{
    return this.http.get<Denominaciones[]>(this.denominacionesUrl+'/all');
  }
  getDenominacion(id:number):Observable<Object> {
    return this.http.get(`${this.denominacionesUrl}/${id}`);
  }
  addDenominaciones(denominaciones: Denominaciones): Observable<number>{
    return this.http.post<number>(this.denominacionesUrl+"/add", denominaciones, {headers:this.httpHeaders});
  }

  deleteDenominaciones(id: number): Observable<number>{
    return this.http.delete<number>(this.denominacionesUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateDenominaciones(denominaciones: Denominaciones):Observable<number> {
    return this.http.put<number>(`${this.denominacionesUrl}/edit/${denominaciones.idtipo_asociacion}`, denominaciones,{headers:this.httpHeaders});
  }
}


