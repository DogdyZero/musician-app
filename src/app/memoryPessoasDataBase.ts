import { Cartao } from './model/cartao';
import { Endereco } from './model/endereco';
import { Telefone } from './model/telefone';
import { Usuario } from './model/usuario';
import { Pessoa } from './model/pessoa';

let cartoes:Cartao[] = [
    {id:1,bandeira:'mastercard',nomeCartao:'Douglas H L Gomes',numeroCartao:'123123123123',validade:'15-05-15',codSeguranca:123},
    {id:2,bandeira:'mastercard',nomeCartao:'Douglas H L Gomes',numeroCartao:'456545654565',validade:'15-05-15',codSeguranca:123},
    {id:3,bandeira:'visa',nomeCartao:'Douglas H L Gomes',numeroCartao:'4123431433123',validade:'15-05-15',codSeguranca:123},
    {id:4,bandeira:'visa',nomeCartao:'Diego Santos',numeroCartao:'234234234234',validade:'15-05-15',codSeguranca:123},
];
let enderecos:Endereco[] = [
    {id:1,tipoLogradouro:'cobranca',logradouro: 'Rua das acacias', numero:111,complemento:null,bairro:'Cesar de Souza',cidade: 'Mogi das Cruzes',estado: 'SP',cep:'08710000'},
    {id:2,tipoLogradouro:'entrega',logradouro: 'Rua das acacias', numero:111,complemento:null,bairro:'Cesar de Souza',cidade: 'Mogi das Cruzes',estado: 'SP',cep:'08710000'},
    {id:3,tipoLogradouro:'cobranca',logradouro: 'Rua das estrelas', numero:111,complemento:null,bairro:'Jardim Santa Tereza',cidade: 'Mogi das Cruzes',estado: 'SP',cep:'08710000'},
    {id:4,tipoLogradouro:'cobranca',logradouro: 'Rua das estrelas', numero:100,complemento:null,bairro:'Jardim Santa Tereza',cidade: 'Mogi das Cruzes',estado: 'SP',cep:'08710000'},
    {id:5,tipoLogradouro:'entrega',logradouro: 'Rua Mauricio', numero:44,complemento:null,bairro:'Jardim Santa Tereza',cidade: 'Mogi das Cruzes',estado: 'SP',cep:'08710000'},
    {id:6,tipoLogradouro:'cobranca',logradouro: 'Rua Jabuticaba', numero:44,complemento:null,bairro:'Vila Pomar',cidade: 'Mogi das Cruzes',estado: 'SP',cep:'08710000'}
    
];
let telefones:Telefone[] =[
    {id:1,ddd:'11',numero:'12341234'},
    {id:2,ddd:'11',numero:'23452345'},
    {id:3,ddd:'12',numero:'23452345'},
    {id:4,ddd:'11',numero:'44554455'},  
];
let usuarios:Usuario[] = [
    {id:1,login:'douglas',senha:'douglas',perfil:'cliente'},
    {id:2,login:'diego',senha:'diego',perfil:'cliente'},
    {id:3,login:'giovanni',senha:'giovanni',perfil:'admin'},  
]

export const MemoryPessoa:Pessoa[] =[
    {id:1,nome:'Douglas Henrique',cpf:'12312312312',rg:'123123',dataNascimento:'12-12-2016',usuario:usuarios[0],endereco:[enderecos[0],enderecos[1]],telefone:[telefones[0],telefones[1]],cartao:[cartoes[0],cartoes[1],cartoes[2]]},
    {id:2,nome:'Diego da Silva Santos',cpf:'12312312312',rg:'123123',dataNascimento:'12-12-2016',usuario:usuarios[1],endereco:[enderecos[2],enderecos[3],enderecos[4]],telefone:[telefones[2]],cartao:[cartoes[3]]},
    {id:3,nome:'Giovanni Araujo',cpf:'12312312312',rg:'123123',dataNascimento:'12-12-2016',usuario:usuarios[2],endereco:null,telefone:null,cartao:null}

]

