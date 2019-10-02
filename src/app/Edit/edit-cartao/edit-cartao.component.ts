import { Cartao } from '../../model/cartao';
import { CartoesService } from '../../services/cartoes.service';
import { Component, OnInit, Input } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-edit-cartao',
  templateUrl: './edit-cartao.component.html',
  styleUrls: ['./edit-cartao.component.css']
})
export class EditCartaoComponent implements OnInit {
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
  cadastrarNovo(){
    this.novoCadastro=true;
  }

  constructor(private pessoasService:PessoasService,
    private usuariosService:UsuariosService,
    private cartaoService:CartoesService,private router:Router) { }

  async editCartao(cartao:Cartao){
    //criar uma copia do objeto

    //let copyPessoa:Pessoa = new Pessoa();
    console.log(cartao)

    this.cartaoService.alterarCartao(cartao).subscribe((data)=>{
      this.router.navigate(['/usuario/',this.pessoa.id]);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }

  tipoBandeira: SelectItem[];
  selectedType: string;
  ngOnInit() {
    this.usuario = this.usuariosService.getUsuario();

    this.tipoBandeira = [
      {label: 'Elo', value: 'Elo'},
      {label: 'Visa', value: 'Visa'},
      {label: 'MasterCard', value: 'MasterCard'}
    ];
  }

}
