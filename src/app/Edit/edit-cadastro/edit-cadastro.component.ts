import { Component, OnInit, Input } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { PessoasService } from '../../services/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cadastro',
  templateUrl: './edit-cadastro.component.html',
  styleUrls: ['./edit-cadastro.component.css']
})
export class EditCadastroComponent implements OnInit {
  @Input() pessoa:Pessoa;
  generos:SelectItem[];
  genero:string;
  
  constructor(private pessoasService:PessoasService,private router:Router) { }

  async altPessoa(pessoa:Pessoa){
    //criar uma copia do objeto

    //let copyPessoa:Pessoa = new Pessoa();


      this.pessoasService.alterarPessoa(pessoa).subscribe((data)=>{
        this.router.navigate(['/usuario/',pessoa.id]);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }
    //en:any;

  ngOnInit() {
    this.generos = [
      {label: 'Feminino', value: 'Feminino'},
      {label: 'Masculino', value: 'Masculino'}
    ];
      }

    /*this.en = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  };*/

}
