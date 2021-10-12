import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //variavel que armazena o valor da tela que ficara ativa naquele momento
  tabActivated = "calculadora"
  constructor() { }

  ngOnInit(): void {
  }

  //função que muda a tela de acordo com a tab selecionada
  changeTab(tab: any){
    this.tabActivated = tab;
  }
}
