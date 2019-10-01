import { TelefonesService } from '../../services/telefones.service';
import { Telefone } from '../../model/telefone';
import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-telefone',
  templateUrl: './edit-telefone.component.html',
  styleUrls: ['./edit-telefone.component.css']
})
export class EditTelefoneComponent implements OnInit {
  @Input() pessoa:Pessoa
  constructor(private telefonesService:TelefonesService,private router:Router) { }

  alterarTelefone(telefone:Telefone){
    console.log(telefone)
    this.telefonesService.alterarTelefone(telefone).subscribe((data)=>{
      this.router.navigate(['/usuario/',this.pessoa.id]);
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
