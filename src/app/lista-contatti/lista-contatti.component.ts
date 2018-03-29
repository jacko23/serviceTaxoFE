import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/user';

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.css']
})
export class ListaContattiComponent implements OnInit {

  constructor() { }

  users = [
    new User('Mahesh', 20),
    new User('Krishna', 22),
    new User('Narendra', 30)
  ];
  

  ngOnInit() {
  }

}
