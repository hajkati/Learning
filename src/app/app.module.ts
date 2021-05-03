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
import { SectionComponent } from './Centre/section/section.component';
import { CoursComponent } from './centre/cours/cours.component';
import { ParcoursListComponent } from './Centre/parcours-list/parcours-list.component';
import { CoursListComponent } from './Centre/cours-list/cours-list.component';
import { SectionListComponent } from './Centre/section-list/section-list.component';
import { CategorieSectionListComponent } from './Centre/categorie-section-list/categorie-section-list.component';
import { SuperCategorieSectionListComponent } from './Centre/super-categorie-section-list/super-categorie-section-list.component';
import { LearningComponent } from './Centre/learning/learning.component';
import { EtudiantComponent } from './Centre/etudiant/etudiant.component';
import { EtudiantListComponent } from './Centre/etudiant-list/etudiant-list.component';
import { InscriptionListComponent } from './Centre/inscription-list/inscription-list.component';
import { QuestionQuizComponent } from './Centre/question-quiz/question-quiz.component';
import { QuizCreateComponent } from './Centre/quiz-create/quiz-create.component';
import { QuizListComponent } from './Centre/quiz-list/quiz-list.component';
@NgModule({
  declarations: [
    AppComponent,
    components,
    CentreComponent,
    ParcoursComponent,
    MenuComponent,
    PageNotFoundComponent,
    CoursComponent,
    SectionComponent,
    ParcoursListComponent,
    CoursListComponent,
    SectionListComponent,
    CategorieSectionListComponent,
    SuperCategorieSectionListComponent,
    LearningComponent,
    EtudiantComponent,
    EtudiantListComponent,
    InscriptionListComponent,
    QuestionQuizComponent,
    QuizCreateComponent,
    QuizListComponent
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
