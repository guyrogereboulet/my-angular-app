import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  //Dichiaro il tipo di variabile che voglio visualizzare
  // name: string;

  //Aggiungendo il decoratore "Input" la classe si aspetta di ricevere una proprietà esterna
  @Input() name: string;

  constructor() {
    //Inizializzo il dato all'interno del costruttore
    this.name = 'Guy';
  }

  ngOnInit(): void {}
}
