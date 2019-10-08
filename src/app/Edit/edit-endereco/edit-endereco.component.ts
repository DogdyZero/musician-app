import { EnderecosService } from '../../services/enderecos.service';
import { Component, OnInit, Input } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { Endereco } from '../../model/endereco';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PessoasService } from 'src/app/services/pessoas.service';


@Component({
  selector: 'app-edit-endereco',
  templateUrl: './edit-endereco.component.html',
  styleUrls: ['./edit-endereco.component.css']
})
export class EditEnderecoComponent implements OnInit {
  @Input() pessoa: Pessoa;
  tiposEndereco: SelectItem[];
  tipo: string;
  usuario: Usuario;
  id = 0;
  totalCadastro = 1;
  novoCadastro: boolean = false;

  updateId(event) {
    this.id = event;
    this.novoCadastro = false;
  }
  updateUsuario(usuario: Usuario) {
    let pessoa = this.usuario.pessoa;
    this.pessoasService.alterarPessoa(pessoa).subscribe();
  }
  cadastrarNovo() {
    this.novoCadastro = true;
  }

  constructor(private pessoasService: PessoasService,
    private usuariosService: UsuariosService,
    private enderecoService: EnderecosService, private router: Router) { }

  async editEnd(endereco: Endereco) {
    this.enderecoService.alterarEndereco(endereco).subscribe((data) => {
      this.router.navigate(['/usuario/', this.pessoa.id]);
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  endereco: Endereco = new Endereco();
  enderecos: Endereco[] = [];

  enderecoCorreios: any = {
    cep: null,
    logradouro: null,
    bairro: null,
    localidade: null,
    uf: null
  };

  salvar(endereco: Endereco) {
    if (endereco.bairro == null) {
      endereco.bairro = this.enderecoCorreios.bairro;
      endereco.cidade = this.enderecoCorreios.cidade;
      endereco.estado = this.enderecoCorreios.uf;
    }
  }

  ngOnInit() {
    this.usuario = this.usuariosService.getUsuario();
    this.tiposEndereco = [
      { label: 'Correspondência', value: 'Correspondência' },
      { label: 'Cobrança', value: 'Cobrança' },
      { label: 'Outros', value: 'Outros' }
    ];
  }

}
