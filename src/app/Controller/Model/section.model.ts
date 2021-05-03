import { Cours } from './cours.model';
import {CategorieSection} from './categorie-section.model';
export class Section {
  public  id: number ;
  public ref: string;
  public libelle: string;
  public contenu: string;
  public urlimage: string;
  public urlvideo: string;
  public urlimage2: string;
  public urlimage3: string;
  public questions: string;
  public indicationProf: string;
  public nombreContenuFinalise: number;
  public nombreContenuEnCours: number;
  public nombreLienFinalise: number;
  public nombreLienEnCours: number;
  public cours = new  Cours() ;
  public categorieSection = new  CategorieSection() ;
}

