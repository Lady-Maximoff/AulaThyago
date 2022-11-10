import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
//Modulos para compartilhar entre os componentes, coloca-se no shared module

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class SharedModule { }
