import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { GrupoPrecificacao } from 'src/app/model/grupo-precificacao';
import { Produto } from './../../model/produto';

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
  @Output() cancel = new EventEmitter()
  @Output() editProd = new EventEmitter()
  @Input() edit:boolean;
  grupo: GrupoPrecificacao = new GrupoPrecificacao();
  valorFinal:number = this.grupo.custoCompra*this.grupo.margemLucroEstimada;
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

  calcular(custo:number,margem:number){
    let a = custo;
    let b = margem;
    let s =a*(b/100);
    let r = Number(custo)+Number(s);
    this.valorFinal=r;

    this.grupo.custoCompra = custo;
    this.grupo.margemLucroEstimada = b;
    this.grupo.valorFinalProduto = this.valorFinal;

  }
  ngOnInit() {
    // this.valorFinal = 0;
    this.prodCategoria = [
      {label: 'Corda', value: 'Corda'},
      {label: 'Sopro', value: 'Sopro'},
      {label: 'Elétrico', value: 'Elétrico'},
      {label: 'Percussão', value: 'Percussão'},
      {label: 'Outros', value: 'Outros'}
  ];
  }

  async saveProduto(file) {
    let resultBase64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(this.arquivo);
    });
    this.grupo.valorFinalProduto =  this.valorFinal;
    this.produto.grupoPrecificacao = this.grupo;
    this.produto.imagemString = resultBase64 as string;
    this.salvar.emit(this.produto)
  }

  async cancelCad(){
    this.cancel.emit(null);
  }
    
  async editProduto(){
   let resultBase64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(this.arquivo);
    });

    this.produto.imagemString = resultBase64 as string;
    this.editProd.emit(this.produto)
  }

}