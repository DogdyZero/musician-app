import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor() { }

  calendarioPT = {
    firstDayOfWeek: 1,
    dayNames: [ "domingo","segunda","terça","quarta","quinta","sexta","sábado" ],
    dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
    dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
    monthNames: [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembr" ],
    monthNamesShort: [ "jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez" ],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'dd/MM/yyyy'
  };
  getCalendarioPT(){
    return this.calendarioPT;
  }
}
