/* tslint:disable:typedef whitespace */
import { Component, OnInit } from '@angular/core';
import {Question} from '../../controller/model/question.model';
import {Reponse} from '../../controller/model/reponse.model';
import {QuestionService} from '../../controller/service/question.service';
import {Quiz} from '../../controller/model/quiz.model';
import {Etudiant} from '../../controller/model/etudiant.model';
import {QuizEtudiant} from '../../controller/model/quiz-etudiant.model';
import {ReponseEtudiant} from '../../controller/model/reponse-etudiant.model';
import {TypeDeQuestion} from '../../controller/model/type-de-question.model';

@Component({
  selector: 'app-question-quiz',
  templateUrl: './question-quiz.component.html',
  styleUrls: ['./question-quiz.component.css']
})
export class QuestionQuizComponent implements OnInit {

  constructor(private questionService: QuestionService) { }



  get questions(): Array<Question> {
    return this.questionService.questions;
  }

  get questionsAll(): Array<Question> {
    return this.questionService.questionsAll;
  }

  get reponses(): Array<Reponse> {
    return this.questionService.reponses;
  }

  get question(): Question {
    return this.questionService.question;
  }

  get reponse(): Reponse {
    return this.questionService.reponse;
  }

  get reponseCorr(): Reponse {
    return this.questionService.reponseCorr;
  }

  get reponsesCorrect(): Array<Reponse> {
    return this.questionService.reponsesCorrect;
  }

  public findByNumero(){
    this.questionService.findByNumero();
  }

  public findAll(){
    this.questionService.findAll();
  }

  public findByQuestionRef(){
    this.questionService.findByQuestionRef();
  }

  public CorrectAnswer(){
    this.questionService.CorrectAnswer();
  }

  public answer(){
    this.questionService.answer();
  }

  public answerNext(y: number){
    this.questionService.answerNext(y);
  }

  public findByNumeroNext(y: number){
    this.questionService.findByNumeroNext(y);
  }

  public findAllReponseEtudiant(){
    this.questionService.findAllReponseEtudiant();
  }

  public check(){
    this.questionService.check();
  }

  public checkInput(rep: string){
    this.questionService.checkInput(rep);
  }
  public getAnswerCheckbox(event: any,ref: Reponse){
    this.questionService.getAnswerCheckbox(event,ref);
  }

  public getAnswerRadio(event: any,ref: Reponse){
    this.questionService.getAnswerRadio(event,ref);
  }

  get quizs(): Array<Quiz> {
    return this.questionService.quizs;
  }

  public findQuiz()
  {
    return this.questionService.findQuiz();
  }

  public findEtudiant()
  {
    return this.questionService.findEtudiant();
  }

  public findQuizRef()
  {
    return this.questionService.findQuizRef();
  }

  public findAllQuizEtudiant()
  {
    return this.questionService.findAllQuizEtudiant();
  }

  get etudiant(): Etudiant {
    return this.questionService.etudiant;
  }

  get quiz(): Quiz {
    return this.questionService.quiz;
  }

  get quizEtudiant(): QuizEtudiant {
    return this.questionService.quizEtudiant;
  }

  get quizEtudiants(): Array<QuizEtudiant> {
    return this.questionService.quizEtudiants;
  }

  get quizEtudiantsInsert(): Array<QuizEtudiant> {
    return this.questionService.quizEtudiantsInsert;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this.questionService.reponseEtudiant;
  }

  get reponsesEtudiantNote(): Array<ReponseEtudiant> {
    return this.questionService.reponsesEtudiantNote;
  }

  public insertQuizEtudiant()
  {
    return this.questionService.insertQuizEtudiant();
  }

  public insertReponseEtudiant(z: number)
  {
    return this.questionService.insertReponseEtudiant(z);
  }
  public insertReponseEtudiantCheckBox(y: number)
  {
    return this.questionService.insertReponseEtudiantCheckBox(y);
  }

  get type(): TypeDeQuestion {
    return this.questionService.type;
  }

  get types(): Array<TypeDeQuestion> {
    return this.questionService.types;
  }

  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this.questionService.reponsesEtudiant;
  }

  ngOnInit(): void {
    this.questionService.findByNumero();
    this.questionService.findByQuestionRef();
    this.questionService.CorrectAnswer();
    this.questionService.findQuiz();
    this.questionService.findEtudiant();
    this.questionService.findQuizRef();
    this.questionService.findAllQuizEtudiant();
    this.questionService.findAllReponseEtudiant();
    this.questionService.selectedItemsRadio = new Array<Reponse>();
    this.questionService.selectedItemsCheckBox = new Array<Reponse>();
  }

}
