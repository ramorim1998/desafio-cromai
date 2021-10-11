import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tabActivated = "calculadora"
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tab: any){
    this.tabActivated = tab;
  }
}
