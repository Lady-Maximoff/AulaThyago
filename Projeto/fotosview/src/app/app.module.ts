//è uma boa prática separar os imports do angular dos nossos imports de 2 em 2 ou 3 em 3
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FotografiaModule } from './fotografia/fotografia.module';
import { HeaderComponent } from './header/header.component';


@NgModule({

  //Declarations é apenas para componentes
  declarations: [
    AppComponent
  ],

  //Imports é apenas para modulos
  imports: [
    AppRoutingModule,
    FotografiaModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
