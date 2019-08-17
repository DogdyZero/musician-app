import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-estoque',
  templateUrl: './edit-estoque.component.html',
  styleUrls: ['./edit-estoque.component.css']
})
export class EditEstoqueComponent implements OnInit {
  valorEstoque: string;
  constructor() { }

  ngOnInit() {
  }

}
