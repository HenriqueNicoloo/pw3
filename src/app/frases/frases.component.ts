import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {

  mensagens = "";

  getFrase(){
  let mensagem = [
    "Por que quando fechamos os dois olhos vemos preto, mas se fecharmos um só não vemos nada?",
    "Você não tem medo de estar sozinho em um quarto escuro, você tem medo de não estar sozinho",
    "Alguém ainda lembra de algo que você disse de anos atrás que você já se esqueceu completamente",
    "O poder do Homem-Aranha seria inútil se ele morasse em uma cidade sem prédios",
    "Todo espelho que você compra já foi usado por outra pessoa",
    "Você nunca viu seu rosto verdadeiramente, só em reflexos e fotos",
    "Se você pudesse atravessar paredes, demorariam dias até você perceber que pode fazer isso",
    "Você já foi o crush de alguém e nunca soube",
    "Não sabemos qual a mentira que mais deu certo no mundo porque até hoje acreditamos nela",
    "Quatro é a metade de oito, mas três é a metade certa de oito"
  ];
  let aleatorio = () => Math.floor(Math.random() * (mensagem.length));

  this.mensagens = mensagem[aleatorio()];
  return this.mensagens;
}}
