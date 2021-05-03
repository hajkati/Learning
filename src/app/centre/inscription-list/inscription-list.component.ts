/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../Controller/model/etudiant.model';
import {Inscription} from '../../Controller/model/inscription.model';
import {InscriptionService} from '../../Controller/service/inscription.service';
import {Centre} from '../../Controller/model/centre.model';
import {Parcours} from '../../Controller/model/parcours.model';
import {EtatInscription} from '../../Controller/model/etat-inscription.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EtudiantService} from '../../Controller/service/etudiant.service';
@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css']
})
export class InscriptionListComponent implements OnInit {

  constructor(private inscriptionService: InscriptionService , private modalService: NgbModal) { }

  findByNumeroInscription(numeroInscription: number): void {
    this.inscriptionService.findByNumeroInscription(numeroInscription);
  }
  public update(index: number , inscription: Inscription){
    this.inscriptionService.update(index, inscription);
  }

  ngOnInit(): void {
    this.inscriptionService.findAll();
  }
  get etudiants(): Array<Etudiant> {
    return this.inscriptionService.etudiants;
  }
  open(content): void{
    this.modalService.open(content);
  }
  get inscription(): Inscription{
    return this.inscriptionService.isncription;
  }
  get inscriptions(): Array<Inscription> {
    return this.inscriptionService.inscriptions;
  }
  get inscriptionslist(): Array<Inscription> {
    return this.inscriptionService.inscriptionslist;
  }
  get centre(): Centre{
    return this.inscriptionService.centre;
  }
  get parcours(): Parcours{
    return this.inscriptionService.parcours;
  }
  get etudiant(): Etudiant{
    return this.inscriptionService.etudiant;
  }
  get etatInscription(): EtatInscription{
    return this.inscriptionService.etatInscription;
  }
}
