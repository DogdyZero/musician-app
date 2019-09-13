import { Cupom } from './../model/cupom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuponsService {

  constructor(private httpClient:HttpClient) { }
  
  url:string = 'http://localhost:8080/cupons';

  getCupons():Observable<Cupom[]>{
    return this.httpClient.get<Cupom[]>(this.url);
  }
  //getCupomUserId(id:Number):Observable<Cupom[]>{
  // return this.httpClient.get<Cupom[]>(`${this.url}/${id}`).pipe();
  //}
}
