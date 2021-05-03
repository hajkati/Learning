import {CategorieSection} from './categorie-section.model';
export class SuperCategorieSection {
  public  id: number ;
  public  ref: string ;
  public  libelle: string ;
  public  numeroOrder: number;
  public  categoriesectionList = new Array<CategorieSection>();
}
