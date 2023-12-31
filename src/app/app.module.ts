import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FoglalasListaComponent } from './foglalas-lista/foglalas-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { UjfoglalasComponent } from './ujfoglalas/ujfoglalas.component';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './fooldal/fooldal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoglalasListaComponent,
    UjfoglalasComponent,
    FooldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
