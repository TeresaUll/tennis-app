import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  title = ' Bienvenido a nuestro club de tennis';
  lugar = 'en la Laguna!'

  ngOnInit(){
    console.log('incio.component cargado!!')
  }
}