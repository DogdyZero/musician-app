import { CuponsService } from './../../services/cupons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

interface Cupom {
  name: string,
  code: string
}

@Component({
  selector: 'app-resumo-compra',
  templateUrl: './resumo-compra.component.html',
  styleUrls: ['./resumo-compra.component.css']
})

export class ResumoCompraComponent implements OnInit {

  id:number;
  cupom: SelectItem[];
  selectedCupom: Cupom[];

  constructor(private router:Router,
              private activatedRoute : ActivatedRoute,
              private cuponsService : CuponsService) {
  }

  ngOnInit() {
    /*this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )*/
    
    this.cupom = [
      {label:'R$10', value:{id:1, name: 'Desconto10', code: 'MSC10'}},
      {label:'R$20', value:{id:2, name: 'Desconto20', code: 'MSC20'}},
      {label:'R$30', value:{id:3, name: 'Desconto30', code: 'MSC30'}},
      {label:'R$40', value:{id:4, name: 'Desconto40', code: 'MSC40'}},
      {label:'R$50', value:{id:5, name: 'Desconto50', code: 'MSC50'}}
  ];

  }

}
