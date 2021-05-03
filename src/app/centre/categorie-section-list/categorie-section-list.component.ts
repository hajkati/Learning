import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Section} from '../../Controller/Model/section.model';
import {CategorieSection} from '../../Controller/Model/categorie-section.model';
import {SuperCategorieSection} from '../../Controller/Model/super-categorie-section.model';

@Component({
  selector: 'app-categorie-section-list',
  templateUrl: './categorie-section-list.component.html',
  styleUrls: ['./categorie-section-list.component.css']
})
export class CategorieSectionListComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  get categoriesectionList(): Array<CategorieSection> {
    return this.parcoursService.categoriesectionList;
  }
  ngOnInit(): void {
    this.parcoursService.findAllCategorieSection();
  }
  findCategorieSectionByLibelle(libelle: string): void {
    this.parcoursService.findCategorieSectionByLibelle(libelle);
  }
  get categoriesection(): CategorieSection {
    return this.parcoursService.categoriesection;
  }
}
