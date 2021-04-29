import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import {Parcours} from '../../Controller/Model/parcours.model';
import {Cours} from '../../Controller/Model/cours.model';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }

  get cours(): Cours {
    return this.parcoursService.cours;
  }
  get parcoursList(): Array<Parcours> {
    return this.parcoursService.parcoursList;
  }
  get parcours(): Parcours {
    return this.parcoursService.parcours;
  }
  get coursList(): Array<Cours> {
    return this.parcoursService.coursList;
  }
  // tslint:disable-next-line:typedef
  public deleteCours(cour: Cours){
    this.parcoursService.deleteCours(cour);
  }
  public savecours(): void{
    this.parcoursService.savecours();
  }
  public save(): void {
    this.parcoursService.save();
  }
  ngOnInit(): void {
  }

  open(content): void {
    this.modalService.open(content);
  }

  afficheSecList(cour: Cours): void {
    this.parcoursService.affichelistSection(cour);
  }

}
