import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',

  //Possiamo passare l'HTML del template direttamente nel decoratore in modo da vedere sil il template che la logica.
  // template: `<p> Ciao</p> `,
  templateUrl: './user-list.component.html',

  //Lo style è di tipo "scoped", vale a dire che vale solo per questo componente.
  //Per condividerlo dovremmo fare => styleUrls: ['./user-list.component.css', 'Percorso css del secondo componente a cui deve essere condivisa la classe'],
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: string[];
  constructor() {
    this.users = ['Adriano', 'Francesco', 'Alessandro', 'Marco'];
  }

  ngOnInit(): void {}
}
