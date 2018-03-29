import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UtenteService{
	public url: string;

	constructor(private _http:Http){
		this.url = "https://taxoservice.herokuapp.com/contacts/showcontacts";
	}

	getPrueba(){
		return 'Hola mundo desde el servicio.';
	}

	getListaUtente(){
		return this._http.get(this.url)
		                 .map(res => res.json());
	}


}