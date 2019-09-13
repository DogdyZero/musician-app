import { Cartao } from '../../model/cartao';
import { CartoesService } from '../../services/cartoes.service';
import { Component, OnInit, Input } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cartao',
  templateUrl: './edit-cartao.component.html',
  styleUrls: ['./edit-cartao.component.css']
})
export class EditCartaoComponent implements OnInit {
  @Input() pessoa:Pessoa


  constructor(private cartaoService:CartoesService,private router:Router) { }

  async editCartao(cartao:Cartao){
    //criar uma copia do objeto

    //let copyPessoa:Pessoa = new Pessoa();


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
    this.tipoBandeira = [
      {label: 'Elo', value: 'Elo'},
      {label: 'Visa', value: 'Visa'},
      {label: 'MasterCard', value: 'MasterCard'}
    ];
  }

}
