import { Injectable } from '@angular/core';
import {Cours} from '../Model/cours.model';
import {Parcours} from '../Model/parcours.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  private _courss: Array<Cours >;
  private _parcours: Parcours;
  private _parcourss: Array<Parcours >;
  private urlBase = 'http://localhost:8036';
  private  url = '/E-learning/parcours';
  private _index: number;
  public validateSave(): boolean{
    return this.parcours.ref != null;
  }

  afficheCours(i: number): void {
    this.http.post<Array<Cours>>('http://localhost:8036/E-learning/cours/', this._parcourss[i]).subscribe(
      data => {
        this._courss = data ;
      }, error => {
        console.log('erroro');
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

  // tslint:disable-next-line:typedef
  public update(index: number, parcours: Parcours) {
    this.parcours = this.clone(parcours);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public save(){
    if (this.parcours.id == null){

      this.http.post(this.urlBase + this.url + '/', this.parcours).subscribe(
        data => {if (data > 0){
          this.findAll();
        }else{
          alert('error lors de la creation' + data);
        }
        }

      );

    }else{
      this.parcourss[this._index] = this.clone(this.parcours);
    }
    this.parcours = null;
  }
  constructor(private  http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public  findAll() {
    this.http.get<Array<Parcours>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.parcourss = data ;
      }, error => {
        console.log(error);
      }
    );
  }
  get parcourss(): Array<Parcours> {
    if (this._parcourss == null){
      this._parcourss = new Array<Parcours>();
    }
    return this._parcourss;
  }

  set parcourss(value: Array<Parcours>) {
    this._parcourss = value;
  }

  get parcours(): Parcours {
    if (this._parcours == null){
      this._parcours = new Parcours();
    }
    return this._parcours;
  }

  set parcours(value: Parcours) {
    this._parcours = value;
  }


  // tslint:disable-next-line:typedef
  private clone(parcours: Parcours){
    const myClone = new  Parcours();
    myClone.id = parcours.id;
    myClone.ref = parcours.ref;
    myClone.libelle = parcours.libelle;
    myClone.numeroOrder = parcours.numeroOrder;
    myClone.description = parcours.description;
    myClone.dateCreation = parcours.dateCreation;
    myClone.datePublication = parcours.datePublication;
    myClone.courss = parcours.courss;
    return myClone;
  }



}
