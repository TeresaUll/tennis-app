import {Component, OnInit, } from '@angular/core';
import {Input , Output , EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'partido',
	templateUrl: './partidos.component.html',
	styleUrls: ['./partidos.component.css'],


})
export class PartidoComponent implements OnInit{
	partidas = [];
	constructor(private authService: AuthService) { }
  
	ngOnInit(): void {
	  this.authService.getPartidas()
		.subscribe(
		  res => {
			console.log(this.partidas = Object.values(res));
			console.log("funciona");
		  },
		  err => console.log(err)
		)	
		}
	}

	
	
	
    
