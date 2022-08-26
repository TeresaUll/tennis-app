
import { Component, OnInit } from '@angular/core';
import { SecretoService } from '../../services/secreto.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secreto',
  templateUrl: './secreto.component.html',
  styleUrls: ['./secreto.component.css']
})
export class SecretoComponent implements OnInit {
  message = '';
  constructor(private secretoService: SecretoService, private router: Router) { }

  ngOnInit() {
    this.secretoService.getMessage()
    .subscribe(
      res => {this.message = res},
      err => console.log("no se puede mostrar el secreto")

    )
  }

}
