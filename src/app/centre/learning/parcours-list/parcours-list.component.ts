import { Component, OnInit } from '@angular/core';
import {SuperCategorieSection} from '../../../Controller/Model/super-categorie-section.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parcours-list',
  templateUrl: './parcours-list.component.html',
  styleUrls: ['./parcours-list.component.css']
})
export class ParcoursListComponent implements OnInit {
  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  get parcoursList(): Array<Parcours> {
    return this.parcoursService.parcoursList;
  }
  ngOnInit(): void {
    this.parcoursService.init();
  }
  findParcoursByLibelle(libel: string): void {
    this.parcoursService.findParcoursByLibelle(libel);
  }
  get parcours(): Parcours {
    return this.parcoursService.parcours;
  }
}
