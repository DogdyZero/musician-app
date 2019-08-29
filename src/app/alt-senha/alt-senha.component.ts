import { Pessoa } from './../model/pessoa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alt-senha',
  templateUrl: './alt-senha.component.html',
  styleUrls: ['./alt-senha.component.css']
})
export class AltSenhaComponent implements OnInit {
  @Input() pessoa:Pessoa;
  constructor() { }

  ngOnInit() {
  }

}
