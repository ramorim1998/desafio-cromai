import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  cateto1: string = "";
  cateto2: string = "";
  hipotenusaResult: number = 0;
  catetoy: string = "";
  hipotenusaCalc: string = "";
  catetox: number = 0;
  constructor(
    private calculadoraService: CalculadoraService
  ) { }

  ngOnInit(): void {
    
  }

  //função que faz o calculo do valor da hipotenusa referente aos valors dos cateto1 e cateto2
  calcularHipotenusa(): number {
    this.hipotenusaResult = this.calculadoraService.calcularHipotenusa(parseFloat(this.cateto1),parseFloat(this.cateto2))
    return this.hipotenusaResult;
  }

  // função que faz o calculo de um dos catetos quando sabemos o valor da hipotenusaCalc e do catetoy
  calcularCateto(): number {
    if(parseFloat(this.catetoy) > parseFloat(this.hipotenusaCalc)){
      alert('O valor individual de cada cateto não pode ser maior que o valor da hipotenusa')
    }
    this.catetox = this.calculadoraService.calcularCateto(parseFloat(this.hipotenusaCalc), parseFloat(this.catetoy))
    return this.catetox;
  }
}
