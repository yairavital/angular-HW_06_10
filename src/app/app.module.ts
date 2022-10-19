import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GameControlComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
