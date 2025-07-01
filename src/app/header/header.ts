import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  title: string = 'Dev-Sharks';
  precio: number = 5;
  mostrar: boolean = true;

  ngOnInit() {
  }

  constructor() {

  }

  miNombre() {
    console.log('Hola soy mi Nombre');
  }
}
