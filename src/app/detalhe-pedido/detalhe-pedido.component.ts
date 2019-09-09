import { Pedido } from './../model/pedido';
import { Pessoa } from './../model/pessoa';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoasService } from './../services/pessoas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html',
  styleUrls: ['./detalhe-pedido.component.css']
})
export class DetalhePedidoComponent implements OnInit {
  pedido: Pedido[] = [];
  pessoa:Pessoa;
  idPessoa:number;
  display: boolean = false;
  selectedValue: string;

  constructor(private pessoasService:PessoasService, private route:Router, private activatedRoute:ActivatedRoute) { }

  showDialog() {
      this.display = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )
    this.pessoasService.getPessoa(this.idPessoa).subscribe(
      (data)=>{
        console.log(data);
        this.pessoa=data;
      }
    )
    this.pedido = [
      {
          id: 1,
          cliente: null,
          produto: null,
          frete: 100,
          total: null,
          data: null,
          status: null
      }
    ];
  }

}
