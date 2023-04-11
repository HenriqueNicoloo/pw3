import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {

  biscoitoInteiro = "../../assets/biscoitoInteiro.png";
  biscoitoQuebrado = "../../assets/biscoitoQuebrado.png";
  biscoitoAtual = this.biscoitoInteiro;

  desativar = false;

  quebrarBiscoito(){
    this.biscoitoAtual = this.biscoitoQuebrado;
    this.desativar = true;
  }

}



