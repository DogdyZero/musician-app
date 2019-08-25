import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-edit-telefone',
  templateUrl: './edit-telefone.component.html',
  styleUrls: ['./edit-telefone.component.css']
})
export class EditTelefoneComponent implements OnInit {
  @Input() pessoa:Pessoa
  constructor() { }

  ngOnInit() {
  }

}
