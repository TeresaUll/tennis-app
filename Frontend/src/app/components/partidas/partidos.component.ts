import {Component, OnInit } from '@angular/core';
import {Input , Output , EventEmitter } from '@angular/core';

@Component({
	selector: 'partido',
	templateUrl: './partidos.component.html',
	styleUrls: ['./partidos.component.css']
})
export class PartidoComponent{
	@Input() nombre?: string; //recibir el valor desde fuera

	@Output() pasameDatos = new EventEmitter();

	constructor(){
		this.nombre='part';
	}

	emitirEvento(){
		this.pasameDatos.emit({
			'nombre': this.nombre
		})

	}
}