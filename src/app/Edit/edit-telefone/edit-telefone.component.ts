import { TelefonesService } from '../../services/telefones.service';
import { Telefone } from '../../model/telefone';
import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-edit-telefone',
  templateUrl: './edit-telefone.component.html',
  styleUrls: ['./edit-telefone.component.css']
})
export class EditTelefoneComponent implements OnInit {
  @Input() pessoa:Pessoa
  usuario:Usuario;
  id=0;
  totalCadastro =1; 
  novoCadastro:boolean=false;

  updateId(event){
    this.id=event;
    this.novoCadastro=false;
  }
  updateUsuario(usuario:Usuario){
    let pessoa = this.usuario.pessoa;
    this.pessoasService.alterarPessoa(pessoa).subscribe();
  }
  constructor(private pessoasService:PessoasService,
    private usuariosService:UsuariosService,
    private telefonesService:TelefonesService,private router:Router) { }

  cadastrarNovo(){
    this.novoCadastro=true;
  }
  alterarTelefone(telefone:Telefone){
    console.log(telefone)
    this.telefonesService.alterarTelefone(telefone).subscribe((data)=>{
      this.router.navigate(['/usuario/',this.pessoa.id]);
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.usuario = this.usuariosService.getUsuario();
  }

}
