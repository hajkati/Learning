import {Question} from './question.model';
import {Reponse} from './reponse.model';
import {QuizEtudiant} from './quiz-etudiant.model';
import {Etudiant} from './etudiant.model';

export class ReponseEtudiant {
  public id: number;
  public question = new Question();
  public reponse = new Reponse();
  public ref: string;
  public quizEtudiant = new QuizEtudiant();
  public etudiant = new Etudiant();
  public note: number;
}
