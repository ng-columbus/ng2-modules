import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent],

  // we'll look at providers more in depth in later examples
  providers: []
})
export class AppModule { }
