import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    constructor(
        private loginService:LoginService) { }

    msg:string;

    items: MenuItem[];
    menuLogin: MenuItem[];


    ngOnInit() {
        let objLogin ={};
        let objDados={};
        let resultado = this.loginService.getUser();
        if(resultado == null){
            objLogin = {label: 'Login', icon: 'pi pi-fw pi-download',routerLink: ['/login']}
        } else {
            objLogin = {label: 'Logout', icon: 'pi pi-fw pi-download',routerLink: ['/'],command:(event: any)=>{
                this.loginService.logout();
            }}
            objDados = {label: 'Meus Dados', icon: 'pi pi-fw pi-plus', routerLink:['usuario',resultado.id]}
        }
        this.items = [
        {
            label: 'Categorias',
            items: [{
                    label: 'Corda',
                    items: [
                        {label: 'Guitarra'},
                        {label: 'Violão'},
                        {label: 'Violino'},
                        {label: 'Baixo'},
                    ]
                },
                {
                    label: 'Sopro',
                    items: [
                        {label: 'Saxofone'},
                        {label: 'Gaita'},
                ]
            },
                {
                    label: 'Tenores',
                    items: [
                        {label: 'Corno inglês'},
                        {label : 'Trombone'},
                    ]
                },
            ]
        },
        {
            label: 'Marcas',
            items: [
                {label: 'Nux'},
                {label: 'Gianini'},
                {label: 'Sabian'},
                {label: 'Roland'},

            ]
        }
    ];
        this.menuLogin = [{
            label: 'App',
            items: [
                objLogin,objDados
            ]
        }
        ];
        
    }
}
