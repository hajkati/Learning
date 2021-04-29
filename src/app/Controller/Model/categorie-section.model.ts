import {Section} from './section.model';
import {SuperCategorieSection} from './super-categorie-section.model';
export class CategorieSection {
  public  id: number ;
  public  ref: string ;
  public  libelle: string ;
  public  numeroOrder: number;
  public  sectionLists = new Array<Section>();
  private superCategorieSection = new SuperCategorieSection();
}
