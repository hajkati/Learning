import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CentreComponent } from './centre/centre.component';
import { ParcoursComponent } from './Centre/parcours/parcours.component';
import { CoursComponent } from './Centre/cours/cours.component';
import { SectionComponent } from './Centre/section/section.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    CentreComponent,
    ParcoursComponent,
    CoursComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
