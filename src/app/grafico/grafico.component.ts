import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../services/graficos.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  data: any;
  faturamento:any;

  constructor() {
      
  }

  ngOnInit() {
    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'],
      datasets: [
          {
              label: 'Guitarra',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [10, 12, 23, 24, 15, 16, 30, 15, 25 ,44 ,30,15]
          },
          {
              label: 'Saxofone',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [3, 2, 3, 4, 3, 2, 2, 1, 1 ,5 ,7,6]
            },
          {
            label: 'Acordeon',
            backgroundColor: '#444444',
            borderColor: '#755555',
            data: [1, 2, 1, 3, 4, 6, 4, 5, 2 ,0 ,1,4]
          }
      ]
  }
  this.faturamento = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'],
    datasets: [
        {
            label: 'Faturamento',
            borderColor: '#1E88E5',
            fill: false,
            data: [10000, 12000, 23000, 24000, 15000, 16000, 30000, 15000, 25000 ,44000 ,30000,15000]
        },
        {
          label: 'Custo',
          borderColor: '#755555',
          fill: false,
          data: [1500, 1200, 2000, 2000, 1500, 1600, 3000, 1000, 2000 ,4000 ,3000,5000]
      }
    ]
  }
  }

}
