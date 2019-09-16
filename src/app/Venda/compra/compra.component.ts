import { ActivatedRoute } from '@angular/router';
import { Pessoa } from './../../model/pessoa';
import { Pedido } from './../../model/pedido';
import { Component, OnInit, Output } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  valorTotal:number;
  //valorCompra:number;
  sum = 0;
  idPessoa:number;
  pessoa:Pessoa;
  //pedido:Pedido;


  constructor(
    private activatedRoute:ActivatedRoute,
    private pessoasService:PessoasService) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )
    this.pessoasService.getPessoa(this.idPessoa).subscribe(
      (data)=>{
        this.pessoa=data;
      }
    )

  }

  totalCompra(event){
    this.sum = event;
  }

  
}
