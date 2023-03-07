import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'error 404';
  biscoitoInteiro = "assets/biscoitoInteiro.png";
  biscoitoQuebrado = "assets/biscoitoQuebrado.png";
  mensagem = [
    "Se a terra é o terceiro planeta do sistema solar, então todos os países deveriam ser considerados de terceiro mundo?",
    "A vida não vai conseguir te derrubar com você deitado",
    "A vingança nunca é plena, mata a alma e a envenena",
    "Se você derrubar sabão no chão, ele ta limpo ou ta sujo?"];

  ocultar = true;

  ocultarMensagem(){
    this.ocultar = false;
  }

  sortearFrases(){
    return this.mensagem[Math.floor(Math.random() * this.mensagem.length)];
  }
}

