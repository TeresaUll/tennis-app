import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Input , Output , EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'partido',
	templateUrl: './partidos.component.html',
	styleUrls: ['./partidos.component.css']
})
export class PartidoComponent implements OnInit{
	partidasunidas: string = '';

	constructor(private authService: AuthService) { }
	
	ngOnInit(): void {
		this.authService.partidas().subscribe(
			res => {
				let partidas = Object.values(res);
				let partida = '';

				partidas.forEach((partida, index) => {
					partida = partida + '<div class="card" tabindex="' + index + '">';
				  })
				  this.partidasunidas = partida;
				  
			},
			err => console.log('algo falla mostrando las partidas')

		)
		

	}

}