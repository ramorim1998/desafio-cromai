import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
  
  calcularHipotenusa (cate1: number, cate2: number): number {
    let resultado: number;
    resultado = Math.sqrt(Math.pow(cate1,2) + Math.pow(cate2,2))
    return resultado;
  }

  calcularCateto (hipo: number, catex: number):number {
    let resultado: number;
    resultado = Math.sqrt(Math.pow(hipo,2) - Math.pow(catex,2));
    return resultado;
  }
}
