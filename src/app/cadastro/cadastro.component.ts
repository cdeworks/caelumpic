import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();

  cadastrar(event) { 
    event.preventDefault();
    console.log(this.foto);
  }



}
