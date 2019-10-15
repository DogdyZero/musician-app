import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Perfil } from '../model/perfil.enum';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService  {

  logado:boolean = false;
  constructor(private httpClient:HttpClient) { 
    
  }
  url:string = 'http://localhost:8080/usuarios';
  
  private usuarios:Usuario[]=[];
  session = sessionStorage;
  usuario:Usuario;
  idUsuario:number;
  getUsuario(){
    // this.session.setItem()
    if(this.usuario==null){
      return null;
    } else{
      return this.usuario;
    }
  }

  logout(){
    this.usuario=null;
  }

  getUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url);
  }
  getUsuarioId(id:Number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.url}/${id}`).pipe();
  }
  salvarUsuario(usuario:Usuario){
    return this.httpClient.post<Usuario>(this.url,usuario);
  }
  deletarUsuario(id:number): Observable<{}>{
    return this.httpClient.delete(`${this.url}/${id}`).pipe();
  }

  alterarUsuario(usuario:Usuario, id:number){
    return this.httpClient.put<Usuario>(`${this.url}/${id}`,usuario);
  }

  async efetuarLogin(usuario:Usuario){
    this.usuario = await this.httpClient.post<Usuario>(this.url+'/login',usuario,
      {headers:{'Accept':'application/json'}}).toPromise();
    if(this.usuario!=null){
        let perfil = this.usuario.perfil;
        if(perfil==Perfil.ADMINISTRADOR){
          this.logado = true;
          return 'admin';
          } else if(perfil==Perfil.CLIENTE){
            this.logado = true;
            return 'cliente';
          } else  {
            return 'Usuario não localizado';
          }
      } else {
        return 'Usuario não localizado';
      }
    

  //async efetuarLogin(usuario:Usuario){

  //  this.usuarios = await this.httpClient.get<Usuario[]>(this.url).toPromise();
  //  console.log(this.usuarios);
  //  for(let u of this.usuarios){

  //     if(usuario.login==u.login){
  //      this.usuario =u;
  //      console.log(u);
  //      if(u.perfil.nome=='ADMINISTRADOR'){
  //        return 'admin';
  //      } else if(u.perfil.nome=='CLIENTE'){
  //        return 'cliente';
  //      } else {
  //        return 'Usuario não localizado';
  //      }
  //    }
  //  } 
      

    
  }

}
