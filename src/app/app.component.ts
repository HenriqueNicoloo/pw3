import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'error 404';
  logo = "favicon.ico";
 // pet = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fyorkshire-terrier-golddust-on-white-401648239&psig=AOvVaw1_6rYmtPX3b74MvaMUogcY&ust=1677673185776000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCIi_CZuP0CFQAAAAAdAAAAABAD"



  obterAutor(){
    return "Henrique da Silva";
  }

  nome = 'Henrique';
  sobrenome = 'Rodrigues';
  idade = '34';
  nomeCompleto(){
    return this.nome + ' ' + this.sobrenome;
  }

  obterAlerta(){
    alert("Te amo");
  }

  ocultar = true;
  obterMsg(){
    this.ocultar = !this.ocultar;
  }
}

