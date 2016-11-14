import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule.forRoot(),

    // Bring in the routing module
    AppRoutingModule
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent],

  // we'll look at providers more in depth in later examples
  providers: []
})
export class AppModule { }
