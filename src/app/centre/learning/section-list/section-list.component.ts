import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Cours} from '../../../Controller/Model/cours.model';
import {Section} from '../../../Controller/Model/section.model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  get sectionListByLibelle(): Array<Section> {
    return this.parcoursService.sectionListByLibelle;
  }
  ngOnInit(): void {
    this.parcoursService.findAllSection();
  }
  findSectionByLibelle(libel: string): void {
    this.parcoursService.findSectionByLibelle(libel);
  }
  get section(): Section {
    return this.parcoursService.section;
  }
}
