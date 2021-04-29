import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParcoursComponent } from './Centre/parcours/parcours.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './Centre/menu/menu.component';
import { PageNotFoundComponent } from './Centre/page-not-found/page-not-found.component';
import {AppRoutingModule, components} from './app-routing.module';
import {CentreComponent} from './centre/centre.component';
@NgModule({
  declarations: [
    AppComponent,
    components,
    CentreComponent,
    ParcoursComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
