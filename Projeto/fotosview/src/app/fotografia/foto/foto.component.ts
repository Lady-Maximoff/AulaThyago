import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  /* tituloPagina="minhas Imagens";
  controle =true; */
  
  @Input() imagens  = "";


  constructor() { }

  ngOnInit(): void {
  }
//mostrar imagens par
//this.controle = !this.controle;

  
  //*metodo do botao foto mudar
 /* mudar(){

  this.controle = !this.controle;

if(this.tituloPagina == "Minhas fotos"){
  this.tituloPagina = "minhas Imagens"
}else{
  this.tituloPagina = "Minhas fotos";
}

  } */

  

}




  