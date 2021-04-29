import {Cours} from './cours.model';
export class Parcours {
  public  id: number ;
  public  ref: string ;
  public  libelle: string ;
  public  datePublication: Date = new Date();
  public  dateCreation: Date = new Date();
  public  numeroOrder: number;
  public  description: number;
  public  coursList = new Array<Cours>();
}
