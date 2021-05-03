import {QuizEtudiant} from './quiz-etudiant.model';

export class Quiz {
  public id: number;
  public ref: string;
  public lib: string;
  public dateDebut: Date = new Date();
  public dateFin: Date = new Date();
  public numero: number;
  public seuilReussite: number;
  public quizEtudiant = new Array<QuizEtudiant>();
}
