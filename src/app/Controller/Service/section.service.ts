import { Injectable } from '@angular/core';
import {Section} from '../model/section.model';
import {HttpClient} from '@angular/common/http';
import {Cours} from '../model/cours.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private urlBase = 'http://localhost:8036';
  private  url = '/E-learning/section';
  private _section: Section;
  private _sections: Array<Section>;
  private _index: number;
  private _courss: Array<Cours>;
  public validateSave(): boolean{
    return this.section.ref != null;
  }
  // tslint:disable-next-line:typedef
  public update(index: number, section: Section) {
    this.section = this.clone(section);
    this._index = index;
  }
  // tslint:disable-next-line:typedef
  public save(){
    if (this.section.id == null){

      this.http.post(this.urlBase + this.url + '/', this.section).subscribe(
        data => {if (data > 0){
          this.findAll();
        }else{
          alert('error lors de la creation' + data);
        }
        }

      );

    }else{
      this.sections[this._index] = this.clone(this.section);
    }
    this.section = null;
  }
  constructor(private  http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public  findAll() {
    this.http.get<Array<Section>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.sections = data ;
      }, error => {
        console.log(error);
      }
    );
  }

  get courss(): Array<Cours> {
    if (this._courss == null){
      this._courss = new Array<Cours>();
    }
    return this._courss;
  }

  set courss(value: Array<Cours>) {
    this._courss = value;
  }


  get sections(): Array<Section> {
    if (this._sections == null){
      this._sections = new Array<Section>();
    }
    return this._sections;
  }

  set sections(value: Array<Section>) {
    this._sections = value;
  }

  get section(): Section {
    if (this._section == null){
      this._section = new Section();
    }
    return this._section;
  }


  set section(value: Section) {
    this._section = value;
  }
  // tslint:disable-next-line:typedef
  private clone(section: Section){
    const myClone = new  Section();
    myClone.ref = section.ref;
    myClone.libelle = section.libelle;
    myClone.urlimage = section.urlimage;
    myClone.urlimage2 = section.urlimage2;
    myClone.urlimage3 = section.urlimage3;
    myClone.urlvideo = section.urlvideo;
    myClone.cours = section.cours;
    myClone.indicationProf = section.indicationProf;
    myClone.questions = section.questions;
    myClone.contenu = section.contenu;
    myClone.nombreContenuEnCours = section.nombreContenuEnCours;
    myClone.nombreContenuFinalise = section.nombreContenuFinalise;
    myClone.nombreLienEnCourse = section.nombreLienEnCourse;
    myClone.nombreLienFinalise = section.nombreLienFinalise;
    return myClone;
  }


}
