import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  declarations: [
    AppComponent,
    NoContentComponent,
    HomeComponent
  ],
  providers: [ ENV_PROVIDERS ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
