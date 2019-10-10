import { ProdutosService } from './../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../../model/produto';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { EstoqueService } from 'src/app/services/estoque.service';
import { Estoque } from 'src/app/model/estoque';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  edit:Boolean = true;
  idProduto:number;
  produto:Produto;
  editTp: Boolean;
  items: MenuItem[];
  activeItem: MenuItem;
  id=0;
  constructor(
    private activatedRoute:ActivatedRoute,
    private produtosService:ProdutosService,
    private estoqueService:EstoqueService,
    private router:Router,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idProduto = params['id'];
      }
    )

    this.activatedRoute.params.subscribe(
      (params:any)=>{
        if (params['editTp'] == '1'){
          this.editTp = true;
        }else{
          this.editTp = false;
        }
      }
    )

    this.produtosService.getProdutoById(this.idProduto).subscribe(
      (data)=>{
        console.log(data);
        this.produto =data;
      }
    )

    if(this.editTp == true){
    this.items = [
      {label: 'Dados gerais', icon: 'pi pi-user-edit',
      command: (data)=>{
        this.id=0;
      }}];
    }else{
      this.items = [
        {label: 'Estoque', icon: 'pi pi-desktop',
        command: (data)=>{
          this.id=1;
        }}
        ];
    } 

    this.activeItem = this.items[0];
  }

  editProd(produto:Produto){
    this.produtosService.alterarProduto(produto).subscribe((data)=>{
      let estoque:Estoque = new Estoque();
      this.router.navigate(['/admin']);    
    });
  }
  cancelEdit(event:Event){
    this.router.navigate(['/admin']);
  }

}
