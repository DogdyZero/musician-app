import { Cupom } from './../model/cupom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuponsService {

  constructor(private httpClient:HttpClient) { }
  
  url:string = 'https://musician-app-backend.herokuapp.com/cupons';

  getCupons():Observable<Cupom[]>{
    return this.httpClient.get<Cupom[]>(this.url);
  }
  updateCupom(cupom:Cupom, id:number):Observable<Cupom>{
    return this.httpClient.put<Cupom>(`${this.url}/${id}`,cupom);
  }
  //getCupomUserId(id:Number):Observable<Cupom[]>{
  // return this.httpClient.get<Cupom[]>(`${this.url}/${id}`).pipe();
  //}
}
