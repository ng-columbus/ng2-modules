import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TeamModule} from "./team/team.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    // importing TeamModule makes its exports and providers items available
    TeamModule
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent],

  // we'll look at providers more in depth in later examples
  providers: []
})
export class AppModule { }
