import { Http, Headers } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  cadastrar(event) { 
    event.preventDefault();
    let headers = new Headers();
    headers.append('Content-type','application/json');

    this.http.post('http://localhost:3000/v1/fotos',JSON.stringify(this.foto),{headers:headers})
        .subscribe( 
          foto => {
            this.foto = new FotoComponent();
            console.log('Foto salva com sucesso');
          }, 
          erro => console.log(erro)
        );
        


    console.log(this.foto);
  }



}
