import {Section} from './section.model';
import {CategorieSection} from './categorie-section.model';
export class SuperCategorieSection {
  public  id: number ;
  public  ref: string ;
  public  libelle: string ;
  public  numeroOrder: number;
  public  categorieSectionList = new Array< CategorieSection>();
}
