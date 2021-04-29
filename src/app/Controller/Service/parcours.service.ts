import { Injectable } from '@angular/core';
import {Parcours} from '../model/parcours.model';
import { HttpClient } from '@angular/common/http';
import {Cours} from '../model/cours.model';
import {Section} from '../Model/section.model';


@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private _parcours: Parcours;
  private _parcoursList: Array<Parcours>;
  private _cours: Cours;
  private _coursList: Array<Cours>;
  private _section: Section;
  private _sectionList: Array<Section>;
  private _index: number;
  constructor(private http: HttpClient ) {  }

  public savecours(): void {
    this.http.post('http://localhost:8036/E-learning/cours/', this.cours).subscribe(
      data => {if (data > 0){
        //  this._coursList.push(this.clonecours(this.cours));
        this.afficheCours(this.cours.parcours);
        this._cours = null ;
      }}, eror => {
        console.log('error');
      }
    );
    this._cours = null ;
  }
  public savesection(): void {
    this.http.post('http://localhost:8036/E-learning/section/', this.section).subscribe(
      data => {if (data > 0){
        /*this.sectionList.push(this.clonesection(this.section));*/
        this.affichelistSection(this.section.cours);
        this._section = null;
      }}, eror => {
        console.log('error');
      }
    );
    this._section = null;
  }
  public save(): void {
    this.http.post<number>('http://localhost:8036/E-learning/parcours/', this.parcours).subscribe(
      data => {
        if (data >= 0){
          /*this.parcoursList.push(this.clone(this.parcours));*/
          this.init();
          this._parcours = null ;
        }
      }, eror => {
        console.log('error');
      }
    );
    this._parcours = null ;
  }

  public init(): void {
    this.http.get< Array<Parcours> >('http://localhost:8036/E-learning/parcours/').subscribe(
      data => {
        this._parcoursList = data ;
      }, error => {
        console.log('error');
      }
    );

  }
  // tslint:disable-next-line:typedef
  public deleteFromSectionview(sections: Section){
    const index = this._sectionList.findIndex(s => s.ref === sections.ref);
    if (index !== -1){
      this._sectionList.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public deleteFromParcoursview(parcour: Parcours){
    const index = this._parcoursList.findIndex(p => p.ref === parcour.ref);
    if (index !== -1){
      this._parcoursList.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public deleteFromCoursview(cour: Cours){
    const index = this._coursList.findIndex(c => c.ref === cour.ref);
    if (index !== -1){
      this._coursList.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public deleteSection(sections: Section) {
    this.section.ref = sections.ref;
    this.http.delete<number>('http://localhost:8036/E-learning/section/ref/' + sections.ref).subscribe(
      data => {
        console.log('data' + data);
        this.deleteFromSectionview(sections);
      }, error => {
        console.log('error');
      }
    );

  }
  // tslint:disable-next-line:typedef
  public deleteCours(cour: Cours){
    this.cours.ref = cour.ref;
    this.http.delete<number >('http://localhost:8036/E-learning/cours/ref/' + cour.ref ).subscribe(
      data => {
        this.deleteFromCoursview(cour);
      }, error => {
        console.log('error');
      }
    );

  }
  // tslint:disable-next-line:typedef
  public deleteParcours(parcour: Parcours){
    this.parcours.ref = parcour.ref;
    this.http.delete<number>('http://localhost:8036/E-learning/parcours/ref/' + parcour.ref).subscribe(
      data => {
        this.deleteFromParcoursview(parcour);
      }, error => {
        console.log('error');
      }
    );

  }
  get section(): Section {
    if (this._section == null) {
      this._section = new Section();
    }
    return this._section;
  }

  get sectionList(): Array<Section> {
    if (this._sectionList == null){
      this._sectionList = new Array<Section>();
    }
    return this._sectionList;
  }

  get cours(): Cours{
    if (this._cours == null){
      this._cours = new Cours();
    }
    return this._cours;
  }


  get coursList(): Array<Cours> {
    if (this._coursList == null){
      this._coursList = new Array<Cours>() ;
    }
    return this._coursList;
  }
  get parcours(): Parcours {
    if (this._parcours == null) {
      this._parcours = new Parcours();
    }
    return this._parcours;
  }

  get parcoursList(): Array<Parcours> {
    if (this._parcoursList == null ) {
      this._parcoursList = new Array<Parcours>();
    }
    return this._parcoursList;
  }

  public clone(parcours: Parcours): Parcours {
    const clone = new Parcours();
    clone.id = parcours.id;
    clone.ref = parcours.ref;
    clone.libelle = parcours.libelle;
    clone.numeroOrder = parcours.numeroOrder;
    clone.description = parcours.description;
    clone.dateCreation = parcours.dateCreation;
    clone.datePublication = parcours.datePublication;
    clone.coursList = parcours.coursList;
    clone.centre = parcours.centre;
    return clone;
  }
  public clonecours(cours: Cours): Cours {
    const myClone = new  Cours();
    myClone.id = cours.id;
    myClone.ref = cours.ref;
    myClone.libelle = cours.libelle;
    myClone.numeroOrder = cours.numeroOrder;
    myClone.description = cours.description;
    myClone.image = cours.image;
    myClone.sectionList = cours.sectionList;
    myClone.parcours = cours.parcours;
    return myClone;
  }

  public clonesection(section: Section): Section{
    const myClone = new  Section();
    myClone.ref = section.ref;
    myClone.libelle = section.libelle;
    myClone.urlimage = section.urlimage;
    myClone.urlimage2 = section.urlimage2;
    myClone.urlimage3 = section.urlimage3;
    myClone.urlvideo = section.urlvideo;
    myClone.cours = section.cours;
    myClone.categorieSection = section.categorieSection;
    myClone.indicationProf = section.indicationProf;
    myClone.questions = section.questions;
    myClone.contenu = section.contenu;
    myClone.nombreContenuEnCours = section.nombreContenuEnCours;
    myClone.nombreContenuFinalise = section.nombreContenuFinalise;
    myClone.nombreLienEnCourse = section.nombreLienEnCourse;
    myClone.nombreLienFinalise = section.nombreLienFinalise;
    return myClone;
  }

  public afficheCours(parcour: Parcours): void {
    this.parcours.ref = parcour.ref;
    this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/parcours/ref/' + parcour.ref ).subscribe(
      data => {
        this._coursList = data;
      }, error => {
        console.log('erroro');
      }
    );
  }

  affichelistSection(cour: Cours): void {
    this.cours.ref = cour.ref;
    this.http.get<Array<Section>>('http://localhost:8036/E-learning/section/cours/ref/' + cour.ref ).subscribe(
      data => {
        this._sectionList = data;
      }, error => {
        console.log('erreuri');
      }
    );
  }
}
