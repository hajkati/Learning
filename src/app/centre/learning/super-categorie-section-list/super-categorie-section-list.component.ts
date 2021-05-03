import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategorieSection} from '../../../Controller/Model/categorie-section.model';
import {SuperCategorieSection} from '../../../Controller/Model/super-categorie-section.model';

@Component({
  selector: 'app-super-categorie-section-list',
  templateUrl: './super-categorie-section-list.component.html',
  styleUrls: ['./super-categorie-section-list.component.css']
})
export class SuperCategorieSectionListComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  get supercategoriesectionList(): Array<SuperCategorieSection> {
    return this.parcoursService.supercategoriesectionList;
  }
  ngOnInit(): void {
    this.parcoursService.findAllSuperCategorieSection();
  }
  findSuperCategorieSectionByLibelle(libel: string): void {
    this.parcoursService.findSuperCategorieSectionByLibelle(libel);
  }
  get supercategoriesection(): SuperCategorieSection {
    return this.parcoursService.supercategoriesection;
  }
}
