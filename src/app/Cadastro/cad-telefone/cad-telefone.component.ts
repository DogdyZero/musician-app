import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Telefone } from '../../model/telefone';
import { Pessoa } from '../../model/pessoa';
import { ConfirmationService, Message } from 'primeng/api';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cad-telefone',
  templateUrl: './cad-telefone.component.html',
  styleUrls: ['./cad-telefone.component.css'],
  providers:[ConfirmationService]

})
export class CadTelefoneComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) {}  
  @Input() usuario :Usuario;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  val:Boolean = true;
  msgs: Message[] = [];

  telefone:Telefone = new Telefone();

  telefones :Telefone[] = [];
  
  cadastrarNovo(){
    this.confirmationService.confirm({
      message: 'Deseja cadastrar outro telefone?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // limpar campos
        this.telefone = new Telefone();
      },
      reject: () => {
        // direcionar para a proxima tela
        this.update.emit(this.usuario);
        this.updateId.emit(++this.id);    
      }
  });
  }


  salvar(telefone:Telefone){  
    if(telefone.ddd == null || telefone.ddd.toString().length != 2){
      this.val = false;
      console.log("Erro no ddd");
    }
    if(telefone.numero == null || telefone.numero.toString().length != 9){
      this.val = false;
      console.log("Erro no telefone");
    }
    if(this.val == true){
      this.telefones.push(telefone);
      this.usuario.pessoa.telefone = this.telefones;
      this.cadastrarNovo();
    }else{
      this.msgs.push({severity:'error', summary:'Erro no formulário', detail:'Preencha os campos corretamente!'});
      this.val = true;
    }
  }

  ngOnInit() {
  }

}
