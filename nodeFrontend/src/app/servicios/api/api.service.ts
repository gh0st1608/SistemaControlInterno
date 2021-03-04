import { Injectable } from '@angular/core';
import { GrabadoI } from '../../models/grabado.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase:string = 'http://localhost:3000/'

  constructor( private http:HttpClient) {}

  getGrabados():Observable<GrabadoI[]>{
    let urlGetGrabados = this.urlBase + "grabado/lista";
    return this.http.get<GrabadoI[]>(urlGetGrabados)
  }


}
