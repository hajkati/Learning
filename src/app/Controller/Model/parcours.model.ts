import {Cours} from "./cours.model";
import {CalendarView} from "@angular/material/datepicker/testing";
export class Parcours {
  public  id: number ;
  public  ref: string ;
  public  libelle: string ;
  public  datePublication: Date = new Date();
  public  dateCreation: Date = new Date();
  public  numeroOrder: number;
  public  description: number;
  public  courss = new Array<Cours>();
}
