import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../services/graficos.service';
import { CalendarioService } from '../services/calendario.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  data: any;
  faturamento:any;
  dataInicio:Date;
  dataFinal:Date;
  pt:any;

  constructor(private graficoService: GraficosService,
    private calendarioService:CalendarioService) {
      
  }
  pesquisar(){
    if(this.dataInicio!=null && this.dataFinal!=null){
      this.graficoService.getGraficoEntre(this.dataInicio,this.dataFinal).subscribe(d =>{
        console.log(d);
        this.data.d;
      })
    }
  }

  ngOnInit() {
    this.graficoService.getGraficoInicial().subscribe(d =>{
      this.data =d;
    });
    this.pt = this.calendarioService.getCalendarioPT();
  // this.faturamento = {
  //   labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'],
  //   datasets: [
  //       {
  //           label: 'Faturamento',
  //           borderColor: '#1E88E5',
  //           fill: false,
  //           data: [10000, 12000, 23000, 24000, 15000, 16000, 30000, 15000, 25000 ,44000 ,30000,15000]
  //       },
  //       {
  //         label: 'Custo',
  //         borderColor: '#755555',
  //         fill: false,
  //         data: [1500, 1200, 2000, 2000, 1500, 1600, 3000, 1000, 2000 ,4000 ,3000,5000]
  //     }
  //   ]
  // }
  }

}
