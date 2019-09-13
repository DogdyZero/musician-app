import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-cons-cadastro',
  templateUrl: './cons-cadastro.component.html',
  styleUrls: ['./cons-cadastro.component.css']
})
export class ConsCadastroComponent implements OnInit {
  @Input() pessoa: Pessoa;
  
  constructor(private router:Router, private pessoaService : PessoasService) { }



  ngOnInit() {

  }

}
