import {Quiz} from './quiz.model';
import {Etudiant} from './etudiant.model';
import {ReponseEtudiant} from './reponse-etudiant.model';

export class QuizEtudiant {
  public id: number;
  public etudiant = new Etudiant();
  public quiz = new Quiz();
  public dateDebut: Date = new Date();
  public dateFin: Date = new Date();
  public note: number;
  public resultat: string;
  public ref: string;
  public reponseEtudiant = new Array<ReponseEtudiant>();
}
