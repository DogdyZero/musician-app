import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Endereco } from 'src/app/model/endereco';
import { Frete } from 'src/app/model/frete';
import { FreteService } from 'src/app/services/frete.service';
import { Pessoa } from '../../model/pessoa';
import { Usuario } from 'src/app/model/usuario';
import { PessoasService } from 'src/app/services/pessoas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nova-entrega',
  templateUrl: './nova-entrega.component.html',
  styleUrls: ['./nova-entrega.component.css']
})
export class NovaEntregaComponent implements OnInit {
  selectedEnd: string;
  displayEnd: boolean = false;
  @Output() dispBtn: Boolean;
  @Input() pessoa:Pessoa
  @Output() freteEvent= new EventEmitter();
  constructor(private pessoasService:PessoasService,
    private usuariosService: UsuariosService,
    private freteService:FreteService) { }

  enderecosLabel:SelectItem[]=[];
  endereco:string;
  usuario:Usuario;

  updateUsuario(usuario:Usuario){
    let pessoa = this.usuario.pessoa;
    this.pessoasService.alterarPessoa(pessoa).subscribe();
    this.displayEnd=false;
  }

  salvar(){
    let frete:Frete =new Frete();
    let endereco:Endereco = new Endereco();
    endereco.id= parseInt(this.endereco);
    frete.endereco = endereco;
    this.freteService.setFrete(frete);
    this.freteEvent.emit(this.freteService.getFrete().calculoFrete);
  }


  ngOnInit() {
    this.usuario = this.usuariosService.getUsuario();
    let enderecos:Endereco[];
    enderecos = this.pessoa.endereco;
    for(let end of enderecos){
      let obj={label:end.logradouro, value:end.id}
      this.enderecosLabel.push(obj);
    }
  }

  showDialogEnd() {
    this.displayEnd = true;
    this.dispBtn = false;
}

}
