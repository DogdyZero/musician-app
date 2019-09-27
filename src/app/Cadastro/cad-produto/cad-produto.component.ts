import { Produto } from './../../model/produto';
import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SelectItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css'],
  providers:[MessageService]
})
export class CadProdutoComponent implements OnInit {
  prodCategoria: SelectItem[];

  @Input() produto:Produto;
  @Output() salvar = new EventEmitter()
  @Output() editProd = new EventEmitter()
  @Input() edit:boolean;

  uploadedFiles: any[] = [];
  arquivo:File;
  constructor(private messageService: MessageService) {}

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.arquivo=this.uploadedFiles[0];
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit() {
    this.prodCategoria = [
      {label: 'Corda', value: 'Corda'},
      {label: 'Sopro', value: 'Sopro'},
      {label: 'Elétrico', value: 'Elétrico'},
      {label: 'Percussão', value: 'Percussão'},
      {label: 'Outros', value: 'Outros'}
  ];
  }

  saveProduto(){
    // this.arquivo=this.uploadedFiles[0];
    // console.log(this.arquivo);
    // if(this.arquivo!=null){
    //   this.produto.arquivo = this.arquivo;
    // }
    // this.salvar.emit(this.produto);
    console.log(this.arquivo)

  }

  editProduto(){
    console.log(this.arquivo)
    // this.editProd.emit(this.produto);
  }

}
