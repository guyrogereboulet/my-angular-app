import { Component } from '@angular/core';

//Decoratore
@Component({
  //specifica il componente in questione
  selector: 'app-root',
  //specifica l'HTML del componente
  templateUrl: './app.component.html',
  //specifica il CSS del componente
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
}
