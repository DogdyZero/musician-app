import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectButtonModule} from 'primeng/selectbutton';

@Component({
  selector: 'app-cad-cartao',
  templateUrl: './cad-cartao.component.html',
  styleUrls: ['./cad-cartao.component.css']
})
export class CadCartaoComponent implements OnInit {
  tipoBandeira: SelectItem[];
  selectedType: string;
  selectedTypes: string[] = ['Elo', 'MasterCard'];

  constructor() {
    this.tipoBandeira = [
      {label: 'Elo', value: 'Elo'},
      {label: 'Visa', value: 'Visa'},
      {label: 'MasterCard', value: 'MasterCard'}
  ];
   }

  ngOnInit() {
  }

}
