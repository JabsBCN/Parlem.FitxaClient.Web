import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ProductClient, API_BASE_URL } from './customer.api.service'; 
import { MessageClient, API_BASE_URL } from './chat.api.client.service'; 
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    MessageClient,
    { provide: API_BASE_URL, useValue: environment.API_BASE_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
