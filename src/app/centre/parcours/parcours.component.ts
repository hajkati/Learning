import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import {Parcours} from '../../Controller/Model/parcours.model';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }

  // tslint:disable-next-line:typedef
  public deleteParcours(parcour: Parcours){
    this.parcoursService.deleteParcours(parcour);
  }

  public save(): void {
    this.parcoursService.save();
  }

  ngOnInit(): void {
    this.parcoursService.init();
  }

  get parcoursList(): Array<Parcours> {
    return this.parcoursService.parcoursList;
  }
  get parcours(): Parcours {
    return this.parcoursService.parcours;
  }

  open(content): void {
    this.modalService.open(content);
  }

  // tslint:disable-next-line:typedef
  afficheCours(parcour: Parcours): void {
    this.parcoursService.afficheCours(parcour);
  }
}
