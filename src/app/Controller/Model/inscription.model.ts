import {Parcours} from './parcours.model';
import {Centre} from './centre.model';
import {Etudiant} from './etudiant.model';
import {EtatInscription} from './etat-inscription.model';

export class Inscription {
  public id: string;
  public numeroInscription: string;
  public datedebutinscription: string;
  public datefininscription: string;
  public parcours = new Parcours();
  public centre = new Centre();
  public etudiant = new Etudiant();
  public etatInscription = new EtatInscription();
}
