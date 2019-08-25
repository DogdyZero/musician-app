import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable, Subscriber } from 'rxjs';
import { Perfil } from '../model/perfil.enum';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService  {

  constructor(private httpClient:HttpClient) { 
    
  }
  url:string = 'http://localhost:8080/usuarios';
  
  private usuarios:Usuario[]=[];

  usuario:Usuario;

  getUsuario(){
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
  salvarUsuario(usuario:Usuario){
    return this.httpClient.post<Usuario>(this.url,usuario);
  }

  async efetuarLogin(usuario:Usuario){
    this.usuario = await this.httpClient.post<Usuario>(this.url,usuario,
      {headers:{'Accept':'application/json'}}).toPromise();
      let perfil = this.usuario.perfil.toString();
        if(perfil==Perfil.ADMINISTRADOR){
          return 'admin';
        } else if(perfil==Perfil.CLIENTE){
          console.log('cliente');
          return 'cliente';
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
