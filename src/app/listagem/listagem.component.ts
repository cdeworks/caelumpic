import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title: String = 'Caelum Pic';
  fotos: Object[] = [];
  
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
      .map(res => res.json())
      .subscribe(
          fotos => this.fotos = fotos,
          erro => console.log(erro)
      );
  }

}
