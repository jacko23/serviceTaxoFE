import { Component, OnInit } from '@angular/core';
import {Utente} from '../../entity/utente';
import {UtenteService} from '../../service/utenteService'

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.css'],
  providers: [UtenteService]
})
export class ListaContattiComponent implements OnInit {
  
  public utente:  Array<Utente>;

  constructor(
    private _utenteService: UtenteService   
  ) { 

  this.utente = new Array<Utente> (); 
  }


  

  ngOnInit() {

    this._utenteService.getListaUtente().subscribe(
			result => {
				this.utente = result;
				
				if(!this.utente){
					console.log("Error en el servidor");
				}
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		);
  }

}
