import {Component, OnInit } from '@angular/core';
import {Input , Output , EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'partido',
	templateUrl: './partidos.component.html',
	styleUrls: ['./partidos.component.css'],

})
export class PartidoComponent implements OnInit{
	tasks = [];
	constructor(private authService: AuthService) { }
  
	ngOnInit() {
	  this.authService.getPartidas()
		.subscribe(
		  res => {
			this.tasks = res;
			console.log("funciona");
		  },
		  err => console.log(err)
		)
	}
    
}