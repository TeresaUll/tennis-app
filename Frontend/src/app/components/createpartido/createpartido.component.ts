import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddpartidaService } from '../../services/addpartida.service';

@Component({
  selector: 'app-createpartido',
  templateUrl: './createpartido.component.html',
  styleUrls: ['./createpartido.component.css']
})
export class CreatepartidoComponent implements OnInit {
  partido = {
    dia: 0,
    mes: 0,
    ano: 0,
    hora: "",
    lugar: "",
    dificultad: ""
  }
  constructor(
    private router: Router, 
    public addPartidaService: AddpartidaService
    ) { }

  ngOnInit(): void {
  }
  add() {
    this.addPartidaService.addPartida(this.partido)
    .subscribe(
      res => {
        console.log(res)
        /* // localStorage.setItem('token', res.token);
         localStorage.setItem('dia', res.dia);
         localStorage.setItem('mes', res.mes);
         localStorage.setItem('ano', res.ano);
         localStorage.setItem('hora', res.hora);
         localStorage.setItem('dificultad', res.dificultad);
         */
         this.router.navigate(['/partidas'])
      },
      err => console.log(err)
      )
  }

}
