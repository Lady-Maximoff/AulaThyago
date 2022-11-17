import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";

import { FotoComponent } from "./foto/foto.component";
import { FotoformComponent } from "./fotoform/fotoform.component";
import { FotolistComponent } from "./fotolist/fotolist.component";
//Feature Module - é o modulo que agrupa componentes
@NgModule({
    declarations:[
        FotoComponent,
        FotolistComponent,
        FotoformComponent
    ],
    exports:[
        FotoComponent,
        FotolistComponent,
        FotoformComponent
    ],

    imports: [
        SharedModule
    ]



})



export class FotografiaModule{



}