import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { PessoasService } from '../services/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cadastro',
  templateUrl: './edit-cadastro.component.html',
  styleUrls: ['./edit-cadastro.component.css']
})
export class EditCadastroComponent implements OnInit {
  @Input() pessoa:Pessoa;
  
  constructor(private pessoasService:PessoasService,private router:Router) { }

  async altPessoa(pessoa:Pessoa){
      this.pessoasService.alterarPessoa(pessoa.id).subscribe((data)=>{
        this.router.navigate(['/usuario/',this.pessoa.id]);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }
  ngOnInit() {
  }

}
