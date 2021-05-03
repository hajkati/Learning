import {Component, OnInit, ViewChild} from '@angular/core';
import {QuizService} from '../../controller/service/quiz.service';
import {Question} from '../../controller/model/question.model';
import {Reponse} from '../../controller/model/reponse.model';
import {TypeDeQuestion} from '../../controller/model/type-de-question.model';
import {createViewChild} from '@angular/compiler/src/core';
import {Quiz} from '../../controller/model/quiz.model';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  get question(): Question {
    return this.quizService.question;
  }
  get questions(): Array<Question> {
    return this.quizService.questions;
  }
  get reponse(): Reponse {
    return this.quizService.reponse;
  }
  get reponses(): Array<Reponse> {
    return this.quizService.question.reponses;
  }
  get type(): TypeDeQuestion {
    return this.quizService.question.typeDeQuestion;
  }
  get types(): Array<TypeDeQuestion> {
    return this.quizService.types;
  }
  // @ts-ignore
  ngOnInit(): void {
    this.quizService.findAll();
    this.questions.push(this.question);
    this.quizService.findQuiz();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  checked(event){
    return  this.quizService.checked(event);
  }
  // tslint:disable-next-line:typedef
  public checkedFalse(event: any){
    return this.quizService.checkedFalse(event);
  }
  public choixSelected(): void{
    this.quizService.choixSelected();
  }
  public quizSelected(): void{
    this.quizService.quizSelected();
  }
  // tslint:disable-next-line:typedef
  public addCard(){
    return this.quizService.addCard();
  }
  get quizs(): Array<Quiz> {
    return this.quizService.quizs;
  }
  // tslint:disable-next-line:typedef
  public addFormule(){
    return   this.quizService.addFormule();
  }
  // tslint:disable-next-line:typedef
  public save(){
    return this.quizService.save();
  }
  get quiz(): Quiz {
    return this.quizService.question.quiz;
  }
  // tslint:disable-next-line:typedef
  private clone(question: Question) {
    // @ts-ignore
    return this.quizService.clone();
  }
  // tslint:disable-next-line:typedef
  /* addQuestion() {
     const btn = document.createElement('input');
     document.body.appendChild(btn);
   }*/
  // tslint:disable-next-line:typedef
  public addReponse(){
    return this.quizService.addReponse();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  delete(index: number) {
    this.quizService.delete(index);
  }
}

