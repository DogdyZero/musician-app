import { Component, OnInit } from '@angular/core';
import { MemoryCupomDataBase } from '../memory-cupom-data-base';

@Component({
  selector: 'app-cupom',
  templateUrl: './cupom.component.html',
  styleUrls: ['./cupom.component.css']
})
export class CupomComponent implements OnInit {
  cupom = MemoryCupomDataBase;
  constructor() { }

  ngOnInit() {
  }

}
