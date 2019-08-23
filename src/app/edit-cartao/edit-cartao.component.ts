import { Component, OnInit } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';

@Component({
  selector: 'app-edit-cartao',
  templateUrl: './edit-cartao.component.html',
  styleUrls: ['./edit-cartao.component.css']
})
export class EditCartaoComponent implements OnInit {

  constructor() { }
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
