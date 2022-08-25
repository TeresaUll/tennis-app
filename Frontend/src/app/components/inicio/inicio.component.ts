import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit{
  title = ' Inicio ';

  ngOnInit(){
    console.log('incio.component cargado!!')
  }
}