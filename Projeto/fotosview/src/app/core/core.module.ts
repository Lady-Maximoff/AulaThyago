import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

//Tudo que quero que esteja em todas as paginas tem que estar dentro do core mdoule

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
