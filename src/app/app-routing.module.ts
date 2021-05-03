import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ParcoursComponent} from './centre/parcours/parcours.component';
import {PageNotFoundComponent} from './centre/page-not-found/page-not-found.component';
import {CentreComponent} from './centre/centre.component';
import {CoursListComponent} from './centre/cours-list/cours-list.component';
import {ParcoursListComponent} from './centre/parcours-list/parcours-list.component';
import {SectionListComponent} from './centre/section-list/section-list.component';
import {CategorieSectionListComponent} from './centre/categorie-section-list/categorie-section-list.component';
import {SuperCategorieSectionListComponent} from './centre/super-categorie-section-list/super-categorie-section-list.component';
import {LearningComponent} from './centre/learning/learning.component';
import {InscriptionListComponent} from './centre/inscription-list/inscription-list.component';
import {EtatInscription} from './Controller/Model/etat-inscription.model';
import {EtudiantComponent} from './centre/etudiant/etudiant.component';
import {EtudiantListComponent} from './centre/etudiant-list/etudiant-list.component';
import {QuestionQuizComponent} from './centre/question-quiz/question-quiz.component';
import {QuizCreateComponent} from './centre/quiz-create/quiz-create.component';
import {QuizListComponent} from './centre/quiz-list/quiz-list.component';
// tslint:disable-next-line:max-line-length
export const components = [CentreComponent, ParcoursListComponent , CoursListComponent, SectionListComponent, CategorieSectionListComponent, SuperCategorieSectionListComponent ,  InscriptionListComponent , EtudiantComponent , EtudiantListComponent , QuestionQuizComponent , QuizCreateComponent , QuizListComponent];
const routes: Routes = [
  {path: '' , component: PageNotFoundComponent},
  {path: 'parcours' , component: components[0]},
  {path: 'parcours-list' , component: components[1]},
  {path: 'cours-list' , component: components[2]},
  {path: 'section-list' , component: components[3]},
  {path: 'categoriesection-list' , component: components[4]},
  {path: 'supercategoriesection-list' , component: components[5]},
  {path: 'inscription-list' , component: components[6]},
  {path: 'etudiant' , component: components[7]},
  {path: 'etudiant-list' , component: components[8]},
  {path: 'quiz' , component: components[9]},
  {path: 'quiz-create' , component: components[10]},
  {path: 'quiz-list' , component: components[11]},
  {path: '**' , component: PageNotFoundComponent},
];
@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
