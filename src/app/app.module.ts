import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  //I Declarations sono tutti i componenti che vengono utilizzati all'interno di questo modulo
  declarations: [AppComponent, UserListComponent, UserItemComponent],
  //Gli Imports sono le dipendenze che ha questo modulo
  imports: [BrowserModule, AppRoutingModule],
  //I Providers sonbo dipendenze che vogliamo sfruttare per la Dependency Injection
  providers: [],
  //Dice utilizzare AppComponent nella fase bootstrap (Avvio)
  bootstrap: [AppComponent],
})
export class AppModule {}
