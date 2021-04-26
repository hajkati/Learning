import {Section} from "./section.model";
import {Parcours} from "./parcours.model";
export class Cours {
  public  id: number ;
  public ref: string;
  public  libelle: string;
  public  image: string;
  public  description: number;
  public nombreContenuFinalise: number;
  public nombreContenuEnCours: number;
  public nombreLienFinalise: number;
  public nombreLienEnCourse: number;
  public numeroOrder: number;
  public parcours: Parcours ;
  public  sections = new Array<Section>();
}
