import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Telefone } from '../../model/telefone';
import { Pessoa } from '../../model/pessoa';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cad-telefone',
  templateUrl: './cad-telefone.component.html',
  styleUrls: ['./cad-telefone.component.css'],
  providers:[ConfirmationService]

})
export class CadTelefoneComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) {}  
  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

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
        this.update.emit(this.pessoa);
        this.updateId.emit(++this.id);
      }
  });
  }


  salvar(telefone:Telefone){  
    this.telefones.push(telefone);
    this.pessoa.telefone = this.telefones;
    this.cadastrarNovo();
  }

  ngOnInit() {
  }

}
