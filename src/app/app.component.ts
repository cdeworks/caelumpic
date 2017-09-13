import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Caelum Pic';
  fotos: Object[] = [];
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos');
  }
}
