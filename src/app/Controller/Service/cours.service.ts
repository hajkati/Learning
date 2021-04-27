import { Injectable } from '@angular/core';
import {Cours} from '../model/cours.model';

import {HttpClient} from '@angular/common/http';
import {Section} from '../model/section.model';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private urlBase = 'http://localhost:8036';
  private  url = '/E-learning/cours';
  private _cours: Cours;
  private _courss: Array<Cours >;
  private _sections: Array<Section>;
  private _index: number;
  public validateSave(): boolean{
    return this.cours.ref != null;
  }
  // tslint:disable-next-line:typedef
  public update(index: number, cours: Cours) {
    this.cours = this.clone(cours);
    this._index = index;
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

  // tslint:disable-next-line:typedef
  public save(){
    if (this.cours.id == null){

      this.http.post(this.urlBase + this.url + '/', this.cours).subscribe(
        data => {if (data > 0){
          this.findAll();
        }else{
          alert('error lors de la creation' + data);
        }
        }

      );
    }else{
      this.courss[this._index] = this.clone(this.cours);
    }

    this.cours = null;


  }
  constructor(private  http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public  findAll(){
    this.http.get<Array<Cours>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.courss = data ;
      }, error => {
        console.log('error');
      }
    );
  }


  affichelistSection(i: number): void {
    this.http.post<Array<Section>>('http://localhost:8036/E-learning/section/', this._courss[i]).subscribe(
      data => {
        this._sections = data;
      }, error => {
        console.log('erreur');
      }
    );
  }
  get cours(): Cours {
    if (this._cours == null){
      this._cours = new Cours();
    }
    return this._cours;
  }

  set cours(value: Cours) {
    this._cours = value;
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
  // tslint:disable-next-line:typedef
  private clone(cours: Cours){
    const myClone = new  Cours();
    myClone.id = cours.id;
    myClone.ref = cours.ref;
    myClone.libelle = cours.libelle;
    myClone.numeroOrder = cours.numeroOrder;
    myClone.description = cours.description;
    myClone.image = cours.image;
    return myClone;
  }


}

