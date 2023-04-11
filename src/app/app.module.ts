import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';
import { FrasesComponent } from './frases/frases.component';

@NgModule({
  declarations: [
    AppComponent,
    BiscoitoComponent,
    FrasesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
