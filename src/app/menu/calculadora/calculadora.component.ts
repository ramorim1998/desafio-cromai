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
  calcularHipotenusa(): number {
    this.hipotenusaResult = this.calculadoraService.calcularHipotenusa(parseFloat(this.cateto1),parseFloat(this.cateto2))
    return this.hipotenusaResult;
  }
  calcularCateto(): number {
    this.catetox = this.calculadoraService.calcularCateto(parseFloat(this.hipotenusaCalc), parseFloat(this.catetoy))
    return this.catetox;
  }
}
