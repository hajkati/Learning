/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../../Controller/Model/etudiant.model';
import {EtudiantService} from '../../../Controller/Service/etudiant.service';
import {Centre} from '../../../Controller/Model/centre.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  constructor(private etudiantService: EtudiantService , private modalService: NgbModal) { }
  findEtudiantByNom(nom: string): void {
    this.etudiantService.findEtudiantByNom(nom);
  }
  open(content): void{
    this.modalService.open(content);
  }
  public delete(index: number){
    this.etudiants.splice(index, 1);
  }
  public update(index: number , etudiant: Etudiant){
    this.etudiantService.update(index, etudiant);
  }
  ngOnInit(): void {
    this.etudiantService.findAll();
  }
  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }
  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }
  get etudiantslist(): Array<Etudiant> {
    return this.etudiantService.etudiantslist;
  }
  get centre(): Centre{
    return this.etudiantService.centre;
  }
  get parcours(): Parcours{
    return this.etudiantService.parcours;
  }
}
